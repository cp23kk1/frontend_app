import { getPublicPath } from '@/utils/basePath';

export const iconFiles = {
  Alert: getPublicPath('/icon/'),
  Exit: getPublicPath('/icon/Exit.svg'),
  Heart: getPublicPath('/icon/Heart.svg'),
  Logo: getPublicPath('/icon/Logo.svg'),
  Pause: getPublicPath('/icon/Pause.svg'),
  ProfileDark: getPublicPath('/icon/ProfileDark.svg'),
  ProfileLight: getPublicPath('/icon/ProfileLight.svg'),
  SettingDark: getPublicPath('/icon/SettingDark.svg'),
  Vector: getPublicPath('/icon/Vector.svg')
} as { [key: string]: any };
