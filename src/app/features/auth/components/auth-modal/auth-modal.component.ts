import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { AbstractControl, ReactiveFormsModule, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthModalService } from '../../../../core/services/auth-modal.service';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthModalComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);

  readonly auth = inject(AuthService);
  readonly modal = inject(AuthModalService);
  readonly feedback = signal<string | null>(null);
  readonly isSubmitting = signal(false);
  readonly signInPasswordVisible = signal(false);
  readonly signUpPasswordVisible = signal(false);
  readonly signUpConfirmPasswordVisible = signal(false);

  readonly signInForm = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  readonly signUpForm = this.formBuilder.nonNullable.group({
    displayName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]]
  }, {
    validators: [AuthModalComponent.passwordsMatchValidator]
  });

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.modal.state().isOpen) {
      this.close();
    }
  }

  close(): void {
    this.feedback.set(null);
    this.isSubmitting.set(false);
    this.modal.close();
  }

  switchMode(mode: 'signin' | 'signup'): void {
    this.feedback.set(null);
    this.signInPasswordVisible.set(false);
    this.signUpPasswordVisible.set(false);
    this.signUpConfirmPasswordVisible.set(false);
    this.modal.switchMode(mode);
  }

  togglePasswordVisibility(mode: 'signin' | 'signup' | 'signup-confirm'): void {
    if (mode === 'signin') {
      this.signInPasswordVisible.update((value) => !value);
      return;
    }

    if (mode === 'signup-confirm') {
      this.signUpConfirmPasswordVisible.update((value) => !value);
      return;
    }

    this.signUpPasswordVisible.update((value) => !value);
  }

  requestPasswordReset(): void {
    const emailControl = this.signInForm.controls.email;

    if (emailControl.invalid) {
      emailControl.markAsTouched();
      this.feedback.set('Enter a valid email to receive a password reset link.');
      return;
    }

    this.feedback.set(`Password reset link sent to ${emailControl.getRawValue()}.`);
  }

  signIn(): void {
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      this.feedback.set('Enter a valid email and password to continue.');
      return;
    }

    this.isSubmitting.set(true);
    const { email, password } = this.signInForm.getRawValue();
    this.auth.signIn(email, password);
    this.finishAuth();
  }

  signUp(): void {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      this.feedback.set('Add your name, a valid email, and matching passwords with at least 8 characters.');
      return;
    }

    this.isSubmitting.set(true);
    const { displayName, email, password } = this.signUpForm.getRawValue();
    this.auth.signUp(displayName, email, password);
    this.finishAuth();
  }

  continueWithGoogle(): void {
    this.auth.continueWithProvider('google');
    this.finishAuth();
  }

  continueWithApple(): void {
    this.auth.continueWithProvider('apple');
    this.finishAuth();
  }

  private finishAuth(): void {
    this.isSubmitting.set(false);
    this.feedback.set(null);
    const pendingIntent = this.auth.consumePendingIntent();
    this.close();

    if (pendingIntent?.redirectUrl) {
      if (pendingIntent.kind === 'upload') {
        this.auth.enableCreatorMode();
      }

      void this.router.navigateByUrl(pendingIntent.redirectUrl);
      return;
    }

    if (pendingIntent?.kind === 'upgrade-plan') {
      this.auth.upgradeToPro();
    }
  }

  private static passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (!password || !confirmPassword) {
      return null;
    }

    return password === confirmPassword ? null : { passwordMismatch: true };
  }
}
