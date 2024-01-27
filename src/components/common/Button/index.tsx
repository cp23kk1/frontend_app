import Icon from '../Icon';
import { ButtonWrapper } from './style';
import { TButton } from './type';

const Button = ({ iconName, label, style, disable, onClick }: TButton) => {
  return (
    <ButtonWrapper onClick={onClick} style={style} disabled={disable}>
      {iconName && <Icon iconName={iconName} onClick={onClick} />}

      <div>{label}</div>
    </ButtonWrapper>
  );
};

export default Button;
