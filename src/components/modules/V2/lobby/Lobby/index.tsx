import Icon from '@/components/common/Icon';
import { LobbyWrapper } from './style';
import { TLobby } from './type';
import NewButton from '@/components/common/V2/NewButton';

const Lobby = ({ onClickLeave, roomID, players, currentPlayer }: TLobby) => {
  return (
    <LobbyWrapper>
      <div className="top-content">
        <div className="back-button button">
          <NewButton
            style={{ width: 'fit-content' }}
            label="Leave"
            onClick={onClickLeave}
          />
        </div>
      </div>
      <div className="main-content">
        <div className="join-with-id">
          <div className="lobby">
            <div className="invitation">
              <div className="room-id">
                INVITATION CODE:
                <div
                  onClick={async () => {
                    await navigator.clipboard.writeText(`${roomID}`);
                    alert('copied');
                  }}
                  className="copy"
                >
                  <Icon iconName="Copy" color="#cfd2f6" size={36} />
                  {roomID}
                </div>
              </div>
            </div>
            <div className="players">
              {players.map((player) => {
                return (
                  <div className="player">
                    <div
                      className={`text-ready ${player.isReady ? 'ready' : ''}`}
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
              {[...Array(8 - players.length)].map(() => {
                return (
                  <div className="player">
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
              <div
                className="ready-button"
                style={{
                  backgroundColor: currentPlayer.isReady ? '#45CA9A' : '#CC4949'
                }}
              >
                READY
              </div>
            </div>
          </div>
        </div>
      </div>
    </LobbyWrapper>
  );
};
export default Lobby;
