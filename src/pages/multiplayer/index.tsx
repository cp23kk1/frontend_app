import BackGround from '@/components/modules/gameplay/BackgroundGamplay';
import GamePlay from '@/components/modules/gameplay/GamePlay';
import MultiplayerGameplay from '@/components/modules/V2/multiplayer/MultiplayerGameplay';
import GamePlayContainer from '@/modules/gameplay/GamePlayContainer';
import type { NextPage } from 'next';
import { useState } from 'react';

//

const Multiplayer: NextPage = () => {
  return (
    <MultiplayerGameplay
      currentRound={6}
      maxRound={10}
      listPlayer={{
        maxPlayer: 10,
        players: [
          {
            displayName: 'test',
            imgPath:
              'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            rank: '1',
            score: 999
          },
          {
            displayName: 'test',
            imgPath:
              'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            rank: '1',
            score: 999
          },
          {
            displayName: 'test',
            imgPath:
              'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            rank: '1',
            score: 999
          },
          {
            displayName: 'test',
            imgPath:
              'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            rank: '1',
            score: 999
          },
          {
            displayName: 'test',
            imgPath:
              'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            rank: '1',
            score: 999
          },
          {
            displayName: 'test',
            imgPath:
              'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            rank: '1',
            score: 999
          },
          {
            displayName: 'test',
            imgPath:
              'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            rank: '1',
            score: 999
          },
          {
            displayName: 'test',
            imgPath:
              'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            rank: '1',
            score: 999
          }
        ]
      }}
      multiplayerQuestion={{
        extra: 'asdf',
        question: 'sdfafdasdf',
        answers: [
          { answer: 'asdfasdf', state: 'normal', onClick: () => {} },
          { answer: 'asdfasdf', state: 'normal', onClick: () => {} },
          { answer: 'asdfasdf', state: 'normal', onClick: () => {} },
          { answer: 'asdfasdf', state: 'normal', onClick: () => {} }
        ]
      }}
    />
  );
};
export default Multiplayer;
