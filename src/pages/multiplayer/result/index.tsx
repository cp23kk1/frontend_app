import BackGround from '@/components/modules/gameplay/BackgroundGamplay';
import GamePlay from '@/components/modules/gameplay/GamePlay';
import MultiplayerGameplay from '@/components/modules/V2/multiplayer/MultiplayerGameplay';
import MultiplayerResult from '@/components/modules/V2/multiplayer/MultiPlayerResult';
import GamePlayContainer from '@/modules/gameplay/GamePlayContainer';
import type { NextPage } from 'next';
import { useState } from 'react';

//

const MultiplayerResultPage: NextPage = () => {
  return (
    <MultiplayerResult
      {...{
        role: 'joiner',
        onClickBack: () => {},
        timer: 1,
        onClickPlay: () => {},
        onCloseLobby: () => {},
        players: [
          {
            id: 1,
            img: '',
            isReady: true,
            rank: 1,
            displayName: 'p1',
            score: 999
          },
          {
            id: 1,
            img: '',
            isReady: true,
            rank: 1,
            displayName: 'p1',
            score: 999
          },
          {
            id: 1,
            img: '',
            isReady: true,
            rank: 1,
            displayName: 'p1',
            score: 999
          },
          {
            id: 1,
            img: '',
            isReady: true,
            rank: 1,
            displayName: 'p1',
            score: 999
          },
          {
            id: 1,
            img: '',
            isReady: true,
            rank: 1,
            displayName: 'p1',
            score: 999
          },
          {
            id: 1,
            img: '',
            isReady: true,
            rank: 1,
            displayName: 'p1',
            score: 999
          },
          {
            id: 1,
            img: '',
            isReady: true,
            rank: 1,
            displayName: 'p1',
            score: 999
          },
          {
            id: 1,
            img: '',
            isReady: true,
            rank: 1,
            displayName: 'p1',
            score: 999
          }
        ]
      }}
    />
  );
};
export default MultiplayerResultPage;
