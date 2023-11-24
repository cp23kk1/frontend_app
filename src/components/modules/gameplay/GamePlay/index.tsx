import { TGamePlay } from './type';
import BackGroundGameplay from '../BackgroundGamplay';
import KnowLedgeSection from '../KnowledgeSection';
import { GamePlayWrapper } from './style';

const GamePlay = ({ knowledgeSectionItem }: TGamePlay) => {
  return (
    <BackGroundGameplay>
      <GamePlayWrapper>
        <div>asdfasdf</div>
        <KnowLedgeSection {...knowledgeSectionItem}></KnowLedgeSection>
      </GamePlayWrapper>
    </BackGroundGameplay>
  );
};

export default GamePlay;
