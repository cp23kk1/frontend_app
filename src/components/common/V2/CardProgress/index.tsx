import { CardProgressWrapper } from './style';
import { TCardProgress } from './type';

const CardProgress = ({
  title,
  score,
  maxScore,
  progress,
  key
}: TCardProgress) => {
  return (
    <CardProgressWrapper progress={progress} key={key}>
      <div className="top">
        <div>{title}</div>
        <span>
          {score}
          <span className="max-score">/{maxScore}</span>
        </span>
      </div>
      <div className="bottom">
        <div className="progress">{progress}%</div>
      </div>
    </CardProgressWrapper>
  );
};

export default CardProgress;
