import BackGround from '@/components/modules/gameplay/BackgroundGamplay';
import GamePlay from '@/components/modules/gameplay/GamePlay';
import GamePlayContainer from '@/modules/gameplay/GamePlayContainer';
import type { NextPage } from 'next';
import { useState } from 'react';

//

const GamePlayPage: NextPage = () => {
  return (
    <GamePlayContainer
      render={({ knowLedgeSection, animationSection, score }) => {
        return (
          <GamePlay
            knowledgeSectionItem={knowLedgeSection}
            score={score}
            animationSectionItem={animationSection}
          />
        );
      }}
    />
  );
};
export default GamePlayPage;
