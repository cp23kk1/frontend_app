import ChoiceAnswer from '@/components/common/V2/ChoiceAnswer';
import { MultiplayerQuestionWrapper } from './style';
import { TMultiplayerQuestion } from './type';
import { v4 as uuid } from 'uuid';
const MultiplayerQuestion = ({
  question,
  extra,
  answers
}: TMultiplayerQuestion) => {
  return (
    <MultiplayerQuestionWrapper>
      <div className="question-section">
        <div className="question">{question}</div>
        <div className="extra-info">{extra}</div>
      </div>
      <div className="answer-section">
        <div className="answers">
          {answers &&
            answers.map((answer) => {
              return <ChoiceAnswer key={uuid()} {...answer} />;
            })}
        </div>
      </div>
    </MultiplayerQuestionWrapper>
  );
};

export default MultiplayerQuestion;
