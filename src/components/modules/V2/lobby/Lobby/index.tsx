import Icon from '@/components/common/Icon';
import { JoinCreateLobbyWrapper } from './style';
import { TJoinCreateLobby } from './type';
import NewButton from '@/components/common/V2/NewButton';

const JoinCreateLobby = ({
  currentPage,
  onClickBack,
  onClickPlayQuickly,
  onChangeRoomID,
  onClickJoin,
  isJoinButtonDisabled
}: TJoinCreateLobby) => {
  return (
    <JoinCreateLobbyWrapper>
      <div className="top-content">
        <div className="back-button button">
          <NewButton
            style={{ width: 'fit-content' }}
            label="BACK"
            onClick={onClickBack}
          />
        </div>
        <div className="menu">
          <div className={currentPage === 'create' ? 'menu-selected' : ''}>
            CREATE
          </div>
          <div className={currentPage === 'join' ? 'menu-selected' : ''}>
            JOIN
          </div>
        </div>
        <div className="play-quick-button button">
          <NewButton
            style={{ width: 'fit-content' }}
            label="PLAY QUICKLY"
            onClick={onClickPlayQuickly}
          />
        </div>
      </div>
      <div className="main-content">
        <div className="join-with-id">
          <div className="label">ENTER YOUR INVITATION CODE</div>
          <div className="input">
            <input
              type="text"
              onChange={onChangeRoomID}
              placeholder="######"
              maxLength={6}
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
      </div>
    </JoinCreateLobbyWrapper>
  );
};
export default JoinCreateLobby;
