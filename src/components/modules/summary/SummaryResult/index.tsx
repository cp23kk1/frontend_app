import { SummaryResultWrapper } from './style';
import { TSummaryResult } from './type';
import { Col, Row } from '@/components/common/layout/responsive';
import GameOverFooter from '../GameOverFooter';
import SummarySection from '../SummarySection';
import { Fragment } from 'react';
import BackgroundSummary from '../BackgroundSummary';

const SummaryResult = ({
  mode,
  bestScore,
  currentScore,
  result,
  footer
}: TSummaryResult) => {
  return (
    <Fragment>
      <BackgroundSummary />
      <SummaryResultWrapper>
        <div className="headers">
          <Row className="header">
            <Col span={6} className="mode">
              Mode: {mode}
            </Col>
            <Col span={12} className="gameover-header">
              GAME OVER
            </Col>
            <Col span={6} className="best-score">
              Best score: {bestScore}
            </Col>
          </Row>
          <Row className="score">
            <div className="current-score">Current score: {currentScore}</div>
          </Row>
        </div>
        <SummarySection {...result} />
        <Row className="footer">
          <div className="options">
            <GameOverFooter {...footer} />
          </div>
        </Row>
      </SummaryResultWrapper>
    </Fragment>
  );
};

export default SummaryResult;
