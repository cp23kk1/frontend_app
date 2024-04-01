import { TCardProgress } from '@/components/common/V2/CardProgress/type';
import { InputHTMLAttributes } from 'react';

export type TUserProfile = {
  onClickBack: () => void;
  onClickSetting: () => void;
  onChangeMode: (input: 'account' | 'stats') => void;
  account: {
    email: string;
    displayName: string;
    profilePic: string;
    since: string;
    onSingOut: () => void;
    editedDisplayName: string;
    isEditMode: boolean;
    onConfirm: () => void;
    onChangeDisplayName: (input: React.FormEvent<HTMLInputElement>) => void;
    onChangeEditMode: () => void;
  };
  mode: 'account' | 'stats';
  stats: {
    barStats: TCardProgress[];
    overAllAcc: string;
    overAllScore: string;
    overAllMaxScore: string;
    vocabularyAcc: string;
    vocabularyScore: string;
    vocabularyMaxScore: string;
    sentenceAcc: string;
    sentenceScore: string;
    sentenceMaxScore: string;
    passageAcc: string;
    passageScore: string;
    passageMaxScore: string;
  };
};
