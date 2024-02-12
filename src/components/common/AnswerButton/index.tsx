import { Textfit } from 'react-textfit';
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
      <Textfit max={48} mode="single">
        {children}
      </Textfit>
    </AnswerButtonWrapper>
  );
};

export default AnswerButton;
