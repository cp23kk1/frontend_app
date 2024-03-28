import { TCardProgress } from '@/components/common/V2/CardProgress/type';
import { InputHTMLAttributes } from 'react';

export type TUserProfile = {
  onClickBack: () => void;
  onClickSetting: () => void;
  account: {};
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
