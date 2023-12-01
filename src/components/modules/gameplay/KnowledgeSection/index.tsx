import QuestionLayout from '@/components/common/QuestionLayout';
import { KnowLedgeSectionWrapper } from './style';
import { TKnowLedgeSection } from './type';
import AnswerButton from '@/components/common/AnswerButton';

const KnowLedgeSection = ({
  style,
  type,
  question,
  pos,
  answers
}: TKnowLedgeSection) => {
  return (
    <KnowLedgeSectionWrapper style={style}>
      <QuestionLayout question={question} pos={pos ?? ''} type={type} />
      <div className="answer-layout">
        {answers.map((answer, index) => {
          return (
            <div className="answer-wrapper" key={index}>
              <AnswerButton {...answer}></AnswerButton>
            </div>
          );
        })}
      </div>
    </KnowLedgeSectionWrapper>
  );
};

export default KnowLedgeSection;
