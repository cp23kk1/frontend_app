import QuestionLayout from '@/components/common/QuestionLayout';
import { KnowLedgeSectionWrapper } from './style';
import { TKnowLedgeSection } from './type';
import AnswerButton from '@/components/common/AnswerButton';

const KnowLedgeSection = ({
  style,
  type,
  question,
  pos,
  ans1,
  ans2
}: TKnowLedgeSection) => {
  return (
    <KnowLedgeSectionWrapper style={style}>
      <QuestionLayout question={question} pos={pos} type={type} />
      <div className="answer-layout">
        <div className="answer-wrapper">
          <AnswerButton state={ans1.state} onClick={ans1.onClick}>
            {ans1.answer}
          </AnswerButton>
        </div>
        <div className="answer-wrapper">
          <AnswerButton state={ans2.state} onClick={ans2.onClick}>
            {ans2.answer}
          </AnswerButton>
        </div>
      </div>
    </KnowLedgeSectionWrapper>
  );
};

export default KnowLedgeSection;
