import '@/styles/globals.css';
import { FixedTypographyWrapper } from './style';
import { TFixedTypography } from './type';

const FixedTypography = ({
  children,
  color,
  fontStyle,
  style
}: TFixedTypography) => {
  return (
    <FixedTypographyWrapper color={color} fontStyle={fontStyle} style={style}>
      {children}
    </FixedTypographyWrapper>
  );
};

export default FixedTypography;
