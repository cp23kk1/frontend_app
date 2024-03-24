import { TChoiceAnswer } from '@/components/common/V2/ChoiceAnswer/type';

export type TMultiplayerQuestion = {
  question: string;
  extra: string;
  answers: TChoiceAnswer[];
};
