import { TKnowLedgeSection } from '@/components/modules/gameplay/KnowledgeSection/type';
import { TQuestion } from './vocabulary/type';
import { TAnimationSection } from '@/components/common/AnimationSection/type';

export type TGamePlayContainer = {
  currentQuestionIndex: number;
  score: number;
  knowLedgeSection?: TKnowLedgeSection;
  animationSection: TAnimationSection;
};
