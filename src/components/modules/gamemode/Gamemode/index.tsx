import { getPublicPath } from '@/utils/basePath';
import Image from 'next/image';
import { GameModeWrapper } from './style';
import { Col, Row } from '@/components/common/layout/responsive';
import Icon from '@/components/common/Icon';
import { TGameMode } from './type';
import Card from '@/components/common/Card';
import { Swiper, SwiperSlide } from 'swiper/react';

import { v4 as uuid } from 'uuid';
import ScoreBoard from '@/components/common/ScoreBoard';
import ProfileTab from '@/components/common/ProfileTab';

const GameMode = ({
  onClickSetting,
  listMode,
  onSelectMode,
  scoreBoard,
  bestScore,
  profileTab,
  onClickPlay
}: TGameMode) => {
  return (
    <>
      <Row
        style={{
          zIndex: -1,
          position: 'fixed',
          width: '100%',
          height: '100%'
        }}
      >
        <Image
          src={getPublicPath('/background/GameModeBackGround.svg')}
          alt="GameModeBackGround"
          layout="fill"
          objectFit="cover"
        />
      </Row>
      <GameModeWrapper>
        <div className="top-section">
          <Col span={8} className="profile">
            <ProfileTab {...profileTab} />
          </Col>
          <Col span={8} className="score">
            Best Score: {bestScore}
          </Col>
          <Col span={8} className="setting">
            <Icon
              className="hover-scale"
              onClick={onClickSetting}
              iconName="SettingLight"
              size={36}
            />
          </Col>
        </div>
        <Row className="mode-section">
          <Swiper
            spaceBetween={32}
            slidesPerView={5}
            centeredSlides
            loop
            onSlideChange={(e) => {
              onSelectMode(e.realIndex);
            }}
          >
            {listMode.map((mode) => {
              return (
                <SwiperSlide key={`SwiperSlide-${uuid()}`}>
                  <Card {...mode}></Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Row>
        <Row className="bottom-section">
          <Col span={6} className="scoreboard">
            <ScoreBoard {...scoreBoard} />
          </Col>
          <Col span={12}></Col>
          <Col span={6} className="play-section">
            <button className="play" onClick={onClickPlay}>
              PLAY <Icon iconName="ArrowRight" size={30} />
            </button>
          </Col>
        </Row>
      </GameModeWrapper>
    </>
  );
};
export default GameMode;
