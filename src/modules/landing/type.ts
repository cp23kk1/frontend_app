import { TLanding } from '@/components/modules/landing/Landing/type';

export interface ILandingContainer extends TLanding {
  onCloseModal: () => void;
  onGoogleLogin: () => void;
  onGuestLogin: () => void;
  isModalLoginOpen: boolean;
}
