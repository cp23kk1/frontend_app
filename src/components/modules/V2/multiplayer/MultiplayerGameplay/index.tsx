import { MultiplayerGameplayWrapper } from './style';
import { TMultiPlayerGameplay } from './type';
import NewButton from '@/components/common/V2/NewButton';
import ListPlayer from '../ListPlayer';
import MultiPlayerQuestion from '../MultiPlayerQuestion';

const MultiplayerGameplay = ({
  currentRound,
  maxRound,
  listPlayer,
  multiplayerQuestion,
  onPause
}: TMultiPlayerGameplay) => {
  return (
    <MultiplayerGameplayWrapper>
      <div className="top">
        <div>
          <NewButton
            label="PAUSE"
            iconName="Pause"
            state="unselected"
            onClick={onPause}
          />
        </div>
        <div className="round">ROUND {`${currentRound}/${maxRound}`}</div>
        <div></div>
      </div>
      <div className="main">
        <div className="list-player">
          <ListPlayer {...listPlayer} />
        </div>
        <div className="question-multiplayer">
          <MultiPlayerQuestion {...multiplayerQuestion} />
        </div>
      </div>
    </MultiplayerGameplayWrapper>
  );
};

export default MultiplayerGameplay;
