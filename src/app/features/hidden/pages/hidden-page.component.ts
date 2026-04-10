import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  PLATFORM_ID,
  computed,
  inject
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { HiddenVideosService } from '../../../core/services/hidden-videos.service';
import { LayoutService } from '../../../core/services/layout.service';
import { MobileNavComponent } from '../../../layout/mobile-nav/mobile-nav.component';
import { SideNavComponent } from '../../../layout/side-nav/side-nav.component';
import { TopNavbarComponent } from '../../../layout/top-navbar/top-navbar.component';

@Component({
  selector: 'app-hidden-page',
  standalone: true,
  imports: [MobileNavComponent, SideNavComponent, TopNavbarComponent, TranslatePipe],
  templateUrl: './hidden-page.component.html',
  styleUrl: './hidden-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HiddenPageComponent {
  private readonly platformId = inject(PLATFORM_ID);

  readonly layout = inject(LayoutService);
  readonly hiddenVideos = inject(HiddenVideosService);
  readonly hiddenCount = computed(() => this.hiddenVideos.hiddenVideos().length);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.layout.setViewportWidth(window.innerWidth);
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.layout.setViewportWidth(window.innerWidth);
    }
  }

  addVideo(videoId: string): void {
    this.hiddenVideos.add(videoId);
  }

  removeVideo(videoId: string): void {
    this.hiddenVideos.remove(videoId);
  }
}
