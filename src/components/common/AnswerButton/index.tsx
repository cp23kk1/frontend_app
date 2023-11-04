import { AnswerButtonWrapper } from './style';
import { TAnswerButton } from './type';

const AnswerButton = ({ style, children, onClick, state }: TAnswerButton) => {
  return (
    <AnswerButtonWrapper style={style} onClick={onClick} state={state}>
      {children}
    </AnswerButtonWrapper>
  );
};

export default AnswerButton;
