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
      {...{
        onPause: () => {},
        onClickFinish: () => {},
        currentRound: 6,
        maxRound: 10,
        listPlayer: {
          maxPlayer: 10,
          players: [
            {
              id: 12,
              isReady: false,
              displayName: 'test',
              img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
              rank: '1',
              score: 999
            },
            {
              id: 12,
              isReady: false,
              displayName: 'test',
              img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
              rank: '1',
              score: 999
            },
            {
              id: 12,
              isReady: false,
              displayName: 'test',
              img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
              rank: '1',
              score: 999
            },
            {
              id: 12,
              isReady: false,
              displayName: 'test',
              img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
              rank: '1',
              score: 999
            },
            {
              id: 12,
              isReady: false,
              displayName: 'test',
              img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
              rank: '1',
              score: 999
            },
            {
              id: 12,
              isReady: false,
              displayName: 'test',
              img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
              rank: '1',
              score: 999
            },
            {
              id: 12,
              isReady: false,
              displayName: 'test',
              img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
              rank: '1',
              score: 999
            },
            {
              id: 12,
              isReady: false,
              displayName: 'test',
              img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
              rank: '1',
              score: 999
            }
          ]
        },
        multiplayerQuestion: {
          extra: 'asdf',
          question: 'sdfafdasdf',
          answers: [
            {
              answerId: '',
              answer: 'asdfasdf',
              state: 'normal',
              onClick: () => {}
            },
            {
              answerId: '',
              answer: 'asdfasdf',
              state: 'normal',
              onClick: () => {}
            },
            {
              answerId: '',
              answer: 'asdfasdf',
              state: 'normal',
              onClick: () => {}
            },
            {
              answerId: '',
              answer: 'asdfasdf',
              state: 'normal',
              onClick: () => {}
            }
          ]
        }
      }}
    />
  );
};
export default Multiplayer;
