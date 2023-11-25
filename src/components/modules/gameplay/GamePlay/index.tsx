import { TGamePlay } from './type';
import BackGroundGameplay from '../BackgroundGamplay';
import KnowLedgeSection from '../KnowledgeSection';
import { GamePlayWrapper, TopSectionWrapper } from './style';
import { Col, Row } from '@/components/common/layout/responsive';

const GamePlay = ({ knowledgeSectionItem }: TGamePlay) => {
  return (
    <BackGroundGameplay>
      <GamePlayWrapper>
        <TopSectionWrapper>
          <Row className="top">
            <Col span={8}>pause icon</Col>
            <Col span={8} className="score">
              Score: 100
            </Col>
            <Col span={8} />
          </Row>
          <Row className="animation">asdfasdf</Row>
        </TopSectionWrapper>
        <KnowLedgeSection {...knowledgeSectionItem}></KnowLedgeSection>
      </GamePlayWrapper>
    </BackGroundGameplay>
  );
};

export default GamePlay;
