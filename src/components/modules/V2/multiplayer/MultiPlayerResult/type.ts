import { TChoiceAnswer } from '@/components/common/V2/ChoiceAnswer/type';
import { TPlayerCard } from '@/components/common/V2/PlayerCard/type';

export type TMultiplayerResult = {
  role: 'host' | 'joiner';
  players: TPlayerCard[];
  timer: number;
  onClickBack: () => void;
  onCloseLobby: () => void;
  onClickPlay: () => void;
};
