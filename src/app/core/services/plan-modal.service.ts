import { Injectable, signal } from '@angular/core';

export interface PlanFeature {
  readonly label: string;
  readonly free: string;
  readonly pro: string;
}

export interface PlanModalState {
  readonly isOpen: boolean;
}

export const PLAN_FEATURES: readonly PlanFeature[] = [
  {
    label: 'Libreria personale',
    free: 'Fino a 50 contenuti salvati',
    pro: 'Illimitata'
  },
  {
    label: 'Accesso creator pubblici',
    free: 'Sì',
    pro: 'Sì'
  },
  {
    label: 'Upload contenuti',
    free: 'Fino a 10 al mese',
    pro: 'Illimitati'
  },
  {
    label: 'Qualita di riproduzione',
    free: '720p',
    pro: '4K'
  },
  {
    label: 'Esportazione collezioni',
    free: 'No',
    pro: 'Sì'
  },
  {
    label: 'Note e annotazioni sui video',
    free: 'No',
    pro: 'Sì'
  },
  {
    label: 'Accesso anticipato a nuovi creator',
    free: 'No',
    pro: 'Sì'
  },
  {
    label: 'Badge profilo Pro',
    free: 'No',
    pro: 'Sì'
  }
];

const DEFAULT_STATE: PlanModalState = {
  isOpen: false
};

@Injectable({ providedIn: 'root' })
export class PlanModalService {
  readonly state = signal<PlanModalState>(DEFAULT_STATE);
  readonly features = PLAN_FEATURES;

  open(): void {
    this.state.set({ isOpen: true });
  }

  close(): void {
    this.state.set(DEFAULT_STATE);
  }
}
