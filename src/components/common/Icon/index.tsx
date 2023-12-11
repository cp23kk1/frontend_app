import { iconFiles } from './list-icon';
import { IconImg } from './style';
import { TIcon } from './type';

const Icon = ({ iconName, size = 60, style, onClick, className }: TIcon) => {
  return (
    <IconImg
      className={className}
      src={iconFiles[iconName]}
      alt={iconName}
      style={style}
      size={size}
      onClick={onClick}
    />
  );
};
export default Icon;
