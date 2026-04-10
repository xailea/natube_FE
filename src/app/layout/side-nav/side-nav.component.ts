import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { LayoutService } from '../../core/services/layout.service';
import { NavItem } from '../../core/models/navigation.models';
import { PlanModalService } from '../../core/services/plan-modal.service';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, DatePipe],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {
  readonly layout = inject(LayoutService);
  readonly auth = inject(AuthService);
  private readonly planModal = inject(PlanModalService);

  readonly navItems: readonly NavItem[] = [
    { label: 'Home', icon: 'home', route: '/home' },
    { label: 'Explora', icon: 'explore', route: '/explore' },
    { label: 'Creators', icon: 'movie_filter', route: '/creator' }
  ];

  readonly activePlan = computed(() => this.auth.user()?.plan ?? 'Free');
  readonly planRenewalDate = computed(() => this.auth.user()?.planRenewalDate ?? null);
  readonly planUsage = computed(() => (this.activePlan() === 'Pro' ? 66 : 0));

  openPlanDetails(): void {
    this.planModal.open();
  }
}
