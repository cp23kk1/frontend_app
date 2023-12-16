import Icon from '../Icon';
import { ButtonWrapper } from './style';
import { TButton } from './type';

const Button = ({ iconName, lebel, style, disable, onClick }: TButton) => {
  return (
    <ButtonWrapper onClick={onClick} style={style} disabled={disable}>
      <Icon iconName={iconName} onClick={onClick} />
      <div>{lebel}</div>
    </ButtonWrapper>
  );
};

export default Button;
