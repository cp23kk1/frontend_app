import { BackgroundSummaryWrapper } from './style';
import { TBackgroundSummary } from './type';

const BackgroundSummary = ({ children }: TBackgroundSummary) => {
  return <BackgroundSummaryWrapper>{children}</BackgroundSummaryWrapper>;
};

export default BackgroundSummary;
