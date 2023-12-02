import { AnimationSectionWrapper } from './style';
import { TAnimationSection } from './type';

const AnimationSection = (animationSection: TAnimationSection) => {
  return (
    <AnimationSectionWrapper {...animationSection}>
      <div className="player">
        <div className="health-bar">
          <div className="health"></div>
        </div>
        <img src="/character/robot.svg" alt="charater" />
      </div>
      <div className="enemy">
        <div className="health-bar">
          <div className="health"></div>
        </div>
        <img src="/enemy/enemy1.svg" alt="charater" />
      </div>
    </AnimationSectionWrapper>
  );
};

export default AnimationSection;