import { getPublicPath } from '@/utils/basePath';

export const iconFiles = {
  Exit: getPublicPath('/icon/Exit.svg'),
  Heart: getPublicPath('/icon/Heart.svg'),
  Home: getPublicPath('/icon/Home.svg'),
  Info: getPublicPath('/icon/Info.svg'),
  Logo: getPublicPath('/icon/Logo.svg'),
  Menu: getPublicPath('/icon/Menu.svg'),
  Pause: getPublicPath('/icon/Pause.svg'),
  ProfileDark: getPublicPath('/icon/ProfileDark.svg'),
  ProfileLight: getPublicPath('/icon/ProfileLight.svg'),
  Retry: getPublicPath('/icon/Retry.svg'),
  SettingDark: getPublicPath('/icon/SettingDark.svg'),
  SettingLight: getPublicPath('/icon/SettingLight.svg'),
  ArrowRight: getPublicPath('/icon/ArrowRight.svg'),
  Crown: getPublicPath('/icon/Crown.svg'),
  ChevronDown: getPublicPath('/icon/ChevronDown.svg'),
  Speaker: getPublicPath('/icon/Speaker.svg')
} as { [key: string]: any };
