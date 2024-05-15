import Icon from '../../Icon';
import { PlayButtonWrapper } from './style';
import { TPlayButton } from './type';

const PlayButton = ({ onClick, iconName, text, disabled }: TPlayButton) => {
  return (
    <PlayButtonWrapper onClick={onClick} disabled={disabled}>
      <Icon color={'#262956'} size={36} iconName={iconName} className="icon" />
      {text}
    </PlayButtonWrapper>
  );
};

export default PlayButton;
