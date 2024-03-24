import { css } from '@emotion/react';
import { iconFiles } from './list-icon';
import { IconDiv } from './style';
import { TIcon } from './type';
import { ReactSVG } from 'react-svg';
import { getPublicPath } from '@/utils/basePath';

const Icon = ({
  iconName,
  size = 60,
  style,
  onClick,
  className,
  color = '#fff'
}: TIcon) => {
  return (
    <IconDiv onClick={onClick} size={size} color={color} style={style}>
      {
        <ReactSVG
          src={getPublicPath(`/icon/${iconName}.svg`)}
          fillRule="evenodd"
          fill="#FFFFFF"
          fillOpacity={1}
          className={className}
        />
      }
    </IconDiv>
    // <IconImg
    //   className={className}
    //   src={iconFiles[iconName]}
    //   alt={iconName}
    //   style={style}
    //   size={size}
    //   onClick={onClick}
    // />
  );
};
export default Icon;
