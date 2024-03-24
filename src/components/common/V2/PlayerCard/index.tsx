import { Col } from '../../layout/responsive';
import { PlayerCardWrapper } from './style';
import { TPlayerCard } from './type';

const PlayerCard = ({ rank, displayName, imgPath, score }: TPlayerCard) => {
  return (
    <PlayerCardWrapper>
      <Col span="3" className="rank">
        {rank}
      </Col>
      <Col span="15" className="user">
        <img className="image" src={imgPath} />
        <div className="display-name">{displayName}</div>
      </Col>
      <Col span="6" className="score">
        {score}
      </Col>
    </PlayerCardWrapper>
  );
};

export default PlayerCard;
