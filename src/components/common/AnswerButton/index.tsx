import { AnswerButtonWrapper } from './style';
import { TAnswerButton } from './type';

const AnswerButton = ({
  style,
  children,
  onClick,
  state,
  disabled
}: TAnswerButton) => {
  return (
    <AnswerButtonWrapper
      style={style}
      onClick={onClick}
      state={state ?? 'normal'}
      disabled={disabled}
    >
      {children}
    </AnswerButtonWrapper>
  );
};

export default AnswerButton;
