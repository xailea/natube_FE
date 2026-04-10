import { Injectable, computed, inject, signal } from '@angular/core';
import { VideoCardModel } from '../models/content.models';
import { CreatorContentService } from './creator-content.service';

@Injectable({ providedIn: 'root' })
export class HiddenVideosService {
  private readonly content = inject(CreatorContentService);
  private readonly hiddenIds = signal<string[]>(['recent-neon']);

  readonly library = computed<VideoCardModel[]>(() => {
    const videos = [this.content.featuredVideo(), ...this.content.recentUploads()];

    return videos.filter(
      (video, index, items) => items.findIndex((item) => item.id === video.id) === index
    );
  });

  readonly hiddenVideos = computed(() => {
    const hidden = new Set(this.hiddenIds());
    return this.library().filter((video) => hidden.has(video.id));
  });

  readonly availableVideos = computed(() => {
    const hidden = new Set(this.hiddenIds());
    return this.library().filter((video) => !hidden.has(video.id));
  });

  add(videoId: string): void {
    if (this.hiddenIds().includes(videoId)) {
      return;
    }

    this.hiddenIds.update((ids) => [...ids, videoId]);
  }

  remove(videoId: string): void {
    this.hiddenIds.update((ids) => ids.filter((id) => id !== videoId));
  }
}
