import { TChoiceAnswer } from '@/components/common/V2/ChoiceAnswer/type';

export type TMultiplayerResult = {
  role: 'host' | 'joiner';
  players: { displayName: string; score: number }[];
};
