import BackGround from '@/components/modules/gameplay/BackgroundGamplay';
import GamePlay from '@/components/modules/gameplay/GamePlay';
import type { NextPage } from 'next';

//

const GamePlayPage: NextPage = () => {
  return (
    <GamePlay
      knowledgeSectionItem={{
        question: 'Question',
        pos: 'noun',
        type: 'vocabulary',
        ans1: {
          state: 'correct',
          answer: 'คำถาม',
          onClick: () => {
            console.log('Answer1 Clicked');
          }
        },
        ans2: {
          state: 'incorrect',
          answer: 'คำตอบ',
          onClick: () => {
            console.log('Answer2 Clicked');
          }
        }
      }}
    />
  );
};
export default GamePlayPage;
