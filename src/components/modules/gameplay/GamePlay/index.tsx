import { TGamePlay } from './type';
import BackGroundGameplay from '../BackgroundGamplay';
import KnowLedgeSection from '../KnowledgeSection';
import { GamePlayWrapper, TopSectionWrapper } from './style';
import { Col, Row } from '@/components/common/layout/responsive';
import { Fragment } from 'react';
import AnimationSection from '@/components/common/AnimationSection';
import Icon from '@/components/common/Icon';
import NewButton from '@/components/common/V2/NewButton';

const GamePlay = ({
  knowledgeSectionItem,
  animationSectionItem,
  onPause,
  score
}: TGamePlay) => {
  return (
    <GamePlayWrapper>
      <TopSectionWrapper>
        <Row className="top">
          <Col span={8}>
            <div style={{ width: 'fit-content' }}>
              <NewButton iconName="Pause" label="PAUSE" onClick={onPause} />
            </div>
          </Col>
          <Col span={8} className="score">
            Score: {score ?? 0}
          </Col>
          <Col span={8} />
        </Row>
        <AnimationSection {...animationSectionItem} />
      </TopSectionWrapper>
      <KnowLedgeSection
        {...knowledgeSectionItem}
        question={knowledgeSectionItem ? knowledgeSectionItem.question : []}
        answers={knowledgeSectionItem ? knowledgeSectionItem.answers : []}
      ></KnowLedgeSection>
    </GamePlayWrapper>
  );
};

export default GamePlay;
