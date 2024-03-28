import { CircleProgressWrapper } from './style';
import { TCircleProgress } from './type';

const CircleProgress = ({ progress, size, color, key }: TCircleProgress) => {
  return (
    <CircleProgressWrapper
      width={size}
      height={size}
      viewBox="0 0 250 250"
      className="circular-progress"
      color={color}
      progress={progress}
      animationKey={key}
    >
      <circle className="bg"></circle>
      <circle className="fg"></circle>
    </CircleProgressWrapper>
  );
};

export default CircleProgress;
