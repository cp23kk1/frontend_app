import { TGameOverFooter } from '../GameOverFooter/type';
import { TSummarySection } from '../SummarySection/type';

export type TSummaryResult = {
  mode: string;
  bestScore: number;
  currentScore: number;
  result: TSummarySection;
  footer: TGameOverFooter;
};
