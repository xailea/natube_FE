import { ChangeDetectionStrategy, Component, HostListener, computed, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AuthModalService } from '../../../../core/services/auth-modal.service';
import { AuthService } from '../../../../core/services/auth.service';
import { PlanModalService } from '../../../../core/services/plan-modal.service';

@Component({
  selector: 'app-plan-modal',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './plan-modal.component.html',
  styleUrl: './plan-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanModalComponent {
  private readonly router = inject(Router);

  readonly auth = inject(AuthService);
  readonly authModal = inject(AuthModalService);
  readonly modal = inject(PlanModalService);
  readonly currentPlan = computed(() => this.auth.user()?.plan ?? 'Free');

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.modal.state().isOpen) {
      this.close();
    }
  }

  close(): void {
    this.modal.close();
  }

  handlePrimaryAction(): void {
    if (!this.auth.isAuthenticated()) {
      this.auth.setPendingIntent({
        kind: 'upgrade-plan',
        title: 'Create your account to continue with Pro',
        description: 'Sign in or create an account, then upgrade your plan from the sidebar.',
        preferredMode: 'signup'
      });
      this.close();
      this.authModal.open({
        mode: 'signup',
        title: 'Create your account to continue with Pro',
        description: 'Save your library, unlock uploads, and manage your plan in one place.'
      });
      return;
    }

    this.auth.upgradeToPro();
  }

  goToProfile(): void {
    this.close();
    void this.router.navigateByUrl('/profile');
  }
}
