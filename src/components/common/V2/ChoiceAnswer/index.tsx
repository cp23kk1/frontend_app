import { ChoiceAnswerWrapper } from './style';
import { TChoiceAnswer } from './type';

const ChoiceAnswer = ({
  state,
  answer,
  onClick,
  answerId,
  disabled
}: TChoiceAnswer) => {
  return (
    <ChoiceAnswerWrapper
      onClick={() => {
        onClick(answerId);
      }}
      disabled={disabled}
      state={state}
    >
      {answer}
    </ChoiceAnswerWrapper>
  );
};

export default ChoiceAnswer;
