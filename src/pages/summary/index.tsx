import SummaryResult from '@/components/modules/summary/SummaryResult';
import SummaryResultContainer from '@/modules/summary/SummaryResultContainer';
import { NextPage } from 'next';

const SummaryResultPage: NextPage = () => {
  return (
    <div></div>
    // <SummaryResultContainer
    //   state={{ page: 'gamemode' }}
    //   onChangeState={() => {}} // for build
    //   render={({ mode, bestScore, currentScore, summarySection, options }) => {
    //     return (
    //       <SummaryResult
    //         mode={mode}
    //         bestScore={bestScore}
    //         currentScore={currentScore}
    //         result={summarySection}
    //         footer={options}
    //       />
    //     );
    //   }}
    // />
  );
};
export default SummaryResultPage;
