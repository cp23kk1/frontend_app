import { TSettingModal } from '@/components/common/SettingModal/type';
import { TLanding } from '@/components/modules/landing/Landing/type';

export type TLandingContainer = {
  onLogin: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  onBegin: () => void;
};
