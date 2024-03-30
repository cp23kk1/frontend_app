import { createRoot } from 'react-dom/client';
import { JoinLobbyWrapper } from './style';
import { TModalJoinLobby } from './type';
import { getPublicPath } from '@/utils/basePath';
import { v4 as uuid } from 'uuid';
import Modal from '../../Modal';
import NewButton from '../NewButton';

const ErrorModal = ({
  currentMode,
  onJoinWithId,
  onChangeId,
  lobby
}: TModalJoinLobby) => {
  return (
    <JoinLobbyWrapper>
      <div className="header">Join Lobby</div>
      <div className="contents">
        <div className="selectMode">
          <NewButton
            style={{ width: 'fit-content' }}
            label="Join with ID"
            state={currentMode === 'joinWithID' ? 'selected' : 'unselected'}
            onClick={onJoinWithId}
          ></NewButton>
          <NewButton
            style={{ width: 'fit-content' }}
            label="QuickJoin"
            state={currentMode === 'quickJoin' ? 'selected' : 'unselected'}
            onClick={onJoinWithId}
          ></NewButton>
        </div>
        {currentMode === 'joinWithID' ? (
          <div className="joinWithIDSection">
            <input
              type="text"
              onChange={onChangeId}
              placeholder="Enter Lobby ID"
              className="inputID"
            />
            <NewButton
              style={{ maxWidth: 89 }}
              label="Join"
              onClick={onJoinWithId}
            ></NewButton>
          </div>
        ) : (
          <div className="quickJoin">
            <div className="lobby">
              {lobby &&
                lobby.map((value) => {
                  return (
                    <div key={uuid()} className="list-lobby">
                      {value}
                    </div>
                  );
                })}
            </div>
            <div className="refresh">Refresh</div>
          </div>
        )}
      </div>
    </JoinLobbyWrapper>
  );
};

export default ErrorModal;
