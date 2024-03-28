import ChoiceAnswer from '@/components/common/V2/ChoiceAnswer';
import { MultiplayerResultWrapper } from './style';
import { TMultiplayerResult } from './type';
import NewButton from '@/components/common/V2/NewButton';
import Icon from '@/components/common/Icon';
import PlayButton from '@/components/common/V2/PlayButton';

const MultiplayerResult = ({ role, players }: TMultiplayerResult) => {
  return (
    <MultiplayerResultWrapper>
      <div className="top-content">
        <div className="back-button button">
          <NewButton
            iconName="Back"
            style={{ width: 'fit-content' }}
            label="BACK"
            onClick={() => {}}
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
              onClick={() => {}}
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
                    <div className="no-1">
                      <Icon iconName="LeaderCrown" />
                      <img
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                        alt=""
                        className="profile-pic"
                      />
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
                    <div className="no-2">
                      <img
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                        alt=""
                        className="profile-pic"
                      />
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
                    <div className="no-3">
                      <img
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                        alt=""
                        className="profile-pic"
                      />
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
                    <div className="player">
                      <div className="rank">{++index}</div>
                      <div className="display-name-wrap">
                        <img
                          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                          alt=""
                          className="profile-pic"
                        />
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
              <PlayButton
                text="NEXT GAME"
                iconName="Play"
                onClick={() => {}}
              ></PlayButton>
            </div>
          ) : (
            <div className="joiner">NEXT GAME IN 10 SECONDS</div>
          )}
        </div>
      </div>
    </MultiplayerResultWrapper>
  );
};

export default MultiplayerResult;
