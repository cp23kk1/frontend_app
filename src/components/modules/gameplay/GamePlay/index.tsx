import { TGamePlay } from './type';
import BackGroundGameplay from '../BackgroundGamplay';
import KnowLedgeSection from '../KnowledgeSection';
import { GamePlayWrapper, TopSectionWrapper } from './style';
import { Col, Row } from '@/components/common/layout/responsive';
import { Fragment } from 'react';
import AnimationSection from '@/components/common/AnimationSection';
import Icon from '@/components/common/Icon';

const GamePlay = ({
  knowledgeSectionItem,
  animationSectionItem,
  onPause,
  score
}: TGamePlay) => {
  return (
    <Fragment>
      <BackGroundGameplay />
      <GamePlayWrapper>
        <TopSectionWrapper>
          <Row className="top">
            <Col span={8}>
              <Icon iconName="Pause" onClick={onPause} />
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
    </Fragment>
  );
};

export default GamePlay;
