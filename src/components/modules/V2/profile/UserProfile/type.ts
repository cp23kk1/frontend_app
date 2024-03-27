import { InputHTMLAttributes } from 'react';

export type TUserProfile = {
  onClickBack: () => void;
  onClickSetting: () => void;
  account: {};
  mode: 'account' | 'stats';
  stats: {};
};
