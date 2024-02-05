import GameMode from '@/components/modules/gamemode/Gamemode';
import BackGround from '@/components/modules/gameplay/BackgroundGamplay';
import GamePlay from '@/components/modules/gameplay/GamePlay';
import GameModeContainer from '@/modules/gamemode/GameModeContainer';
import { getPublicPath } from '@/utils/basePath';
import type { NextPage } from 'next';
import { useState } from 'react';

//

const GameModePage: NextPage = () => {
  return (
    <GameModeContainer
      onChangeState={(s) => {
        console.log(s);
      }}
      render={(props) => {
        return <GameMode {...props}></GameMode>;
      }}
    />
  );
};
export default GameModePage;
