import QuestionLayout from '@/components/common/QuestionLayout';
import { KnowLedgeSectionWrapper } from './style';
import { TKnowLedgeSection } from './type';
import AnswerButton from '@/components/common/AnswerButton';
import { ReactNode } from 'react';

const KnowLedgeSection = ({
  style,
  type,
  question,
  pos,
  answers,
  onAnswer
}: TKnowLedgeSection) => {
  const _handleAnswer = (meaning: string) => {
    onAnswer(meaning);
  };
  return (
    <KnowLedgeSectionWrapper style={style}>
      <QuestionLayout question={question} pos={pos ?? ''} type={type} />
      <div className="answer-layout">
        {answers.map((answer, index) => {
          return (
            <div className="answer-wrapper" key={index}>
              <AnswerButton
                {...answer}
                onClick={() => {
                  _handleAnswer(answer.children);
                }}
              ></AnswerButton>
            </div>
          );
        })}
      </div>
    </KnowLedgeSectionWrapper>
  );
};

export default KnowLedgeSection;
