import BackGround from '@/components/modules/gameplay/BackgroundGamplay';
import GamePlay from '@/components/modules/gameplay/GamePlay';
import GamePlayContainer from '@/modules/gameplay/GamePlayContainer';
import type { NextPage } from 'next';
import { useState } from 'react';

//

const GamePlayPage: NextPage = () => {
  return (
    <GamePlayContainer
      state={{ page: 'gamemode' }}
      onChangeState={() => {}} //for build
      render={({ knowLedgeSection, animationSection, score, onPause }) => {
        return (
          <GamePlay
            knowledgeSectionItem={knowLedgeSection}
            score={score}
            onPause={onPause}
            animationSectionItem={animationSection}
          />
        );
      }}
    />
  );
};
export default GamePlayPage;
