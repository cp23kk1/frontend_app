import { TKnowLedgeSection } from '@/components/modules/gameplay/KnowledgeSection/type';
import { TAnimationSection } from '@/components/common/AnimationSection/type';

export type TGamePlayContainer = {
  score: number;
  knowLedgeSection: TKnowLedgeSection;
  animationSection: TAnimationSection;
  onChangeScore: (score: number) => void;
  onPause: () => void;
};
