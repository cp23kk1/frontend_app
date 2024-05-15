import ChoiceAnswer from '@/components/common/V2/ChoiceAnswer';
import { MultiplayerResultWrapper } from './style';
import { TMultiplayerResult } from './type';
import NewButton from '@/components/common/V2/NewButton';
import Icon from '@/components/common/Icon';
import PlayButton from '@/components/common/V2/PlayButton';
import { v4 as uuid } from 'uuid';
const MultiplayerResult = ({
  role,
  players,
  timer,
  onClickBack,
  onCloseLobby,
  onClickPlay
}: TMultiplayerResult) => {
  return (
    <MultiplayerResultWrapper>
      <div className="top-content">
        <div className="back-button button">
          <NewButton
            iconName="Back"
            style={{ width: 'fit-content' }}
            label="BACK"
            onClick={onClickBack}
          />
        </div>

        <div className="topic">
          <div>LOBBY LEADERBOARD</div>
          <div>RESULT</div>
        </div>

        <div className="play-quick-button button">
          {role === 'host' && (
            <NewButton
              iconName="Close"
              style={{ width: 'fit-content' }}
              label="CLOSE LOBBY"
              onClick={onCloseLobby}
            />
          )}
        </div>
      </div>
      <div className="main-content">
        <div className="leader-board-wrap">
          <div className="leader-board">
            {players.map((player, index) => {
              switch (index) {
                case 0:
                  return (
                    <div key={uuid()} className="no-1">
                      <Icon iconName="LeaderCrown" />
                      <img src={player.img} alt="" className="profile-pic" />
                      <div className="podium">
                        <Icon iconName="First" />
                        <div className="display-name">{player.displayName}</div>
                        <div className="score">
                          <div>{player.score}</div>
                          <div>points</div>
                        </div>
                      </div>
                    </div>
                  );
                case 1:
                  return (
                    <div key={uuid()} className="no-2">
                      <img src={player.img} alt="" className="profile-pic" />
                      <div className="podium">
                        <Icon iconName="Second" />

                        <div className="display-name">{player.displayName}</div>
                        <div className="score">
                          <div>{player.score}</div>
                          <div>points</div>
                        </div>
                      </div>
                    </div>
                  );
                case 2:
                  return (
                    <div key={uuid()} className="no-3">
                      <img src={player.img} alt="" className="profile-pic" />
                      <div className="podium">
                        <Icon iconName="Third" />

                        <div className="display-name">{player.displayName}</div>
                        <div className="score">
                          <div>{player.score}</div>
                          <div>points</div>
                        </div>
                      </div>
                    </div>
                  );
                default:
                  return (
                    <div key={uuid()} className="player">
                      <div className="rank">{++index}</div>
                      <div className="display-name-wrap">
                        <img src={player.img} alt="" className="profile-pic" />
                        <div className="display-name">{player.displayName}</div>
                      </div>
                      <div className="score">{player.score} points</div>
                    </div>
                  );
              }
            })}
          </div>
        </div>
        <div className="button-play-again">
          {role === 'host' ? (
            <div className="host">
              <div></div>
              <div className="joiner">NEXT GAME IN {timer} SECONDS</div>

              <PlayButton
                text="NEXT GAME"
                iconName="Play"
                onClick={onClickPlay}
              ></PlayButton>
            </div>
          ) : (
            <div className="joiner">NEXT GAME IN {timer} SECONDS</div>
          )}
        </div>
      </div>
    </MultiplayerResultWrapper>
  );
};

export default MultiplayerResult;
