import { getPublicPath } from '@/utils/basePath';
import { AnimationSectionWrapper } from './style';
import { TAnimationSection } from './type';

const AnimationSection = (animationSection: TAnimationSection) => {
  return (
    <AnimationSectionWrapper {...animationSection}>
      <div className="player">
        <div className="health-bar">
          <div className="health"></div>
        </div>
        <img src={getPublicPath(`/character/player/robot.svg`)} alt="player" />
      </div>
      <div className="enemy">
        <div className="health-bar">
          <div className="health"></div>
        </div>
        <img src={getPublicPath(`/character/enemy/enemy1.svg`)} alt="enemy" />
      </div>
    </AnimationSectionWrapper>
  );
};

export default AnimationSection;
