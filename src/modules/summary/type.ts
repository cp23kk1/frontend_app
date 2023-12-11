import { TGameOverFooter } from '@/components/modules/summary/GameOverFooter/type';
import { TSummarySection } from '@/components/modules/summary/SummarySection/type';

export type TSummaryResultContainer = {
  mode: string;
  bestScore: number;
  currentScore: number;
  summarySection: TSummarySection;
  options: TGameOverFooter;
};
