import { ButtonWrapper } from './style';
import { TButton } from './type';

const Button = ({ text, onClick, style, className }: TButton) => {
  return (
    <ButtonWrapper className={className} style={style} onClick={onClick}>
      {text}
    </ButtonWrapper>
  );
};
export default Button;
