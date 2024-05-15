import { IconDiv } from './style';
import { TIcon } from './type';
import { ReactSVG } from 'react-svg';
import { getPublicPath } from '@/utils/basePath';

const Icon = ({ iconName, size, style, onClick, className, color }: TIcon) => {
  return (
    <IconDiv onClick={onClick} size={size} color={color} style={style}>
      {
        <ReactSVG
          src={getPublicPath(`/icon/${iconName}.svg`)}
          fillRule="evenodd"
          fillOpacity={1}
          className={className}
        />
      }
    </IconDiv>
  );
};
export default Icon;
