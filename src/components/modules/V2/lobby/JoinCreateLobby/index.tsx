import Icon from '@/components/common/Icon';
import { JoinCreateLobbyWrapper } from './style';
import { TJoinCreateLobby } from './type';
import NewButton from '@/components/common/V2/NewButton';
import PlayButton from '@/components/common/V2/PlayButton';
import { v4 as uuid } from 'uuid';
import { create } from 'domain';

const JoinCreateLobby = ({
  currentPage,
  onClickBack,
  onClickPlayQuickly,
  onChangeRoomID,
  onClickJoin,
  onChangeMode,
  isJoinButtonDisabled,
  createLobby,
  onClickPlay
}: TJoinCreateLobby) => {
  return (
    <JoinCreateLobbyWrapper>
      <div className="top-content">
        <div className="back-button button">
          {currentPage === 'join' ? (
            <NewButton
              iconName="Back"
              style={{ width: 'fit-content' }}
              label="BACK"
              onClick={onClickBack}
            />
          ) : (
            <NewButton
              iconName="Close"
              style={{ width: 'fit-content' }}
              label="CLOSE LOBBY"
              onClick={createLobby.onClickCloseLobby}
            />
          )}
        </div>
        <div className="menu">
          <div
            onClick={() => {
              onChangeMode('create');
            }}
            className={currentPage === 'create' ? 'menu-selected' : ''}
          >
            CREATE A GAME
          </div>
          <div
            onClick={() => {
              onChangeMode('join');
            }}
            className={currentPage === 'join' ? 'menu-selected' : ''}
          >
            JOIN A LOBBY
          </div>
        </div>
        <div className="play-quick-button button">
          <NewButton
            iconName="Play"
            style={{ width: 'fit-content' }}
            label="PLAY QUICKLY"
            onClick={onClickPlayQuickly}
          />
        </div>
      </div>
      <div className="main-content">
        {currentPage === 'join' ? (
          <div className="join-with-id">
            <div className="label">ENTER YOUR INVITATION CODE</div>
            <div className="input">
              <input
                type="text"
                onChange={onChangeRoomID}
                placeholder="######"
                maxLength={6}
                value={createLobby.roomID}
              />
            </div>
            <div className="join-button">
              <NewButton
                style={{ width: 'fit-content', height: 64, fontSize: 36 }}
                label="JOIN LOBBY"
                disable={isJoinButtonDisabled}
                onClick={onClickJoin}
              />
            </div>
          </div>
        ) : (
          <div className="create-lobby">
            <div className="game-setting">
              <div className="title">GAME SETTINGS</div>
              <div className="setting">
                <div>MODE</div>
                <div className="mode-select">
                  {/* <label className="input-radio" htmlFor="all">
                    <input
                      onChange={createLobby.gameSetting.onChangeMode}
                      type="radio"
                      id="all"
                      name="mode"
                      value="all"
                      checked={createLobby.gameSetting.mode === 'all'}
                    />
                    <span className="checkmark"></span>ALL
                  </label> */}

                  <label className="input-radio" htmlFor="vocabulary">
                    <input
                      onChange={createLobby.gameSetting.onChangeMode}
                      type="radio"
                      id="vocabulary"
                      name="mode"
                      value="vocabulary"
                      checked={createLobby.gameSetting.mode === 'vocabulary'}
                    />
                    <span className="checkmark"></span>
                    VOCABULARY
                  </label>
                </div>
                <div className="number-question">
                  Number of Questions
                  <div className="input-num">
                    <Icon
                      iconName="Minus"
                      onClick={() => {
                        createLobby.gameSetting.onChangeNumQuestions(
                          createLobby.gameSetting.numQuestions - 1
                        );
                      }}
                      size={16}
                      style={{ cursor: 'pointer' }}
                    />
                    {createLobby.gameSetting.numQuestions}
                    <Icon
                      iconName="Plus"
                      onClick={() => {
                        createLobby.gameSetting.onChangeNumQuestions(
                          createLobby.gameSetting.numQuestions + 1
                        );
                      }}
                      size={16}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                </div>
                <div className="speed">
                  SPEED
                  <div className="input-speed">
                    <div
                      onClick={() => {
                        createLobby.gameSetting.onChangeSpeed('slow');
                      }}
                      className={
                        createLobby.gameSetting.speed === 'slow'
                          ? 'selected'
                          : ''
                      }
                    >
                      Slow
                    </div>
                    <div
                      className={
                        createLobby.gameSetting.speed === 'normal'
                          ? 'selected'
                          : ''
                      }
                      onClick={() => {
                        createLobby.gameSetting.onChangeSpeed('normal');
                      }}
                    >
                      Normal
                    </div>
                    <div
                      className={
                        createLobby.gameSetting.speed === 'fast'
                          ? 'selected'
                          : ''
                      }
                      onClick={() => {
                        createLobby.gameSetting.onChangeSpeed('fast');
                      }}
                    >
                      Fast
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lobby">
              <div className="invitation">
                <div className="room-id">
                  INVITATION CODE:
                  <div
                    onClick={async () => {
                      await navigator.clipboard.writeText(
                        `${createLobby.roomID}`
                      );
                      alert('copied');
                    }}
                    className="copy"
                  >
                    <Icon iconName="Copy" color="#cfd2f6" size={36} />
                    {createLobby.roomID}
                  </div>
                </div>
              </div>
              <div className="players">
                {createLobby.players.map((player) => {
                  return (
                    <div key={uuid()} className="player">
                      <div
                        className={`text-ready ${
                          player.isReady ? 'ready' : ''
                        }`}
                      >
                        {player.isReady ? 'READY' : 'NOT READY'}
                      </div>
                      <img
                        className={`profile-image ${
                          player.isReady ? 'border-ready' : 'border-not-ready'
                        }`}
                        src={player.img}
                      />
                      <div className="profile-name">{player.displayName}</div>
                    </div>
                  );
                })}
                {[...Array(8 - createLobby.players.length)].map(() => {
                  return (
                    <div key={uuid()} className="player">
                      <div className={`text-ready `}></div>
                      <div
                        className="profile-image"
                        style={{
                          backgroundColor: '#393D73',
                          display: 'flex',
                          justifyContent: 'center',
                          opacity: 0.5
                        }}
                      >
                        <Icon iconName="User" color="#9EA3E8" size={80} />
                      </div>
                      <div className="profile-name"></div>
                    </div>
                  );
                })}
              </div>
              <div className="play-now">
                <PlayButton
                  disabled={createLobby.isPlayDisabled}
                  iconName="Play"
                  text="PLAY NOW"
                  onClick={onClickPlay}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </JoinCreateLobbyWrapper>
  );
};
export default JoinCreateLobby;
