import { ChoiceAnswerWrapper } from './style';
import { TChoiceAnswer } from './type';

const ChoiceAnswer = ({ state, answer, onClick }: TChoiceAnswer) => {
  return (
    <ChoiceAnswerWrapper onClick={onClick} state={state}>
      {answer}
    </ChoiceAnswerWrapper>
  );
};

export default ChoiceAnswer;
