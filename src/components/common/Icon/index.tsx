import { iconFiles } from './list-icon';
import { TIcon } from './type';

export const Icon = ({ iconName, size, style, onClick }: TIcon) => {
  return (
    <div style={style} onClick={onClick}>
      <img src={iconFiles[iconName]} alt={iconName} />
    </div>
  );
};
