import '@/styles/globals.css';
import { DynamicTypographyWrapper } from './style';
import { TDynamicTypography } from './type';

const DynamicTypography = ({
  children,
  color,
  family,
  size,
  weight,
  style
}: TDynamicTypography) => {
  return (
    <DynamicTypographyWrapper
      color={color}
      family={family}
      size={size}
      weight={weight}
      style={style}
    >
      {children}
    </DynamicTypographyWrapper>
  );
};

export default DynamicTypography;
