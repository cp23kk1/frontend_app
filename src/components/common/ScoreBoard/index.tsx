import Icon from '../Icon';
import { Col } from '../layout/responsive';
import { ScoreBoardWrapper } from './style';
import { TScoreBoard } from './type';
import { v4 as uuid } from 'uuid';
const ScoreBoard = ({ listScore, userScore }: TScoreBoard) => {
  return (
    <ScoreBoardWrapper>
      <div className="header">
        <Icon iconName="Crown" size={30} /> WEEKLY LEADERBOARD
        <Icon iconName="Crown" size={30} />
      </div>
      <div className="score-table">
        {listScore.map((value) => {
          return (
            <div key={uuid()}>
              <Col span={4} className="series">
                {value.no}
              </Col>
              <Col span={12} className="username">
                {value.userName}
              </Col>
              <Col span={8} className="score">
                {value.score}
              </Col>
            </div>
          );
        })}

        <div className="user-score" key={uuid()}>
          <Col span={4} className="series">
            {userScore.no}
          </Col>
          <Col className="username" span={12}>
            {userScore.userName}
          </Col>
          <Col span={8} className="score">
            {userScore.score}
          </Col>
        </div>
      </div>
    </ScoreBoardWrapper>
  );
};

export default ScoreBoard;
