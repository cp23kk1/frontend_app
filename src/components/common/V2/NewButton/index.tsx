import Icon from '../../Icon';
import { ButtonWrapper } from './style';
import { TNewButton } from './type';

const NewButton = ({
  label,
  style,
  disable,
  onClick,
  className,
  state = 'unselected',
  iconName,
  danger
}: TNewButton) => {
  return (
    <ButtonWrapper
      className={className}
      onClick={onClick}
      style={style}
      disabled={disable}
      state={state}
      danger={danger}
      iconName={iconName}
    >
      {iconName && (
        <Icon
          size={24}
          iconName={iconName}
          onClick={onClick}
          className="icon"
        />
      )}
      {label}
    </ButtonWrapper>
  );
};

export default NewButton;
