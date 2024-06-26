import { TAnimationSection } from '@/components/common/AnimationSection/type';
import { TKnowLedgeSection } from '../KnowledgeSection/type';

export type TGamePlay = {
  knowledgeSectionItem: TKnowLedgeSection;
  score?: number;
  animationSectionItem: TAnimationSection;
  briefInfo: {
    word: string;
    definition: string;
    onClickMore: () => void;
    isShow: boolean;
  };
  onPause: () => void;
  onClickRetry: () => void;
  onClickFinish: () => void;
};
