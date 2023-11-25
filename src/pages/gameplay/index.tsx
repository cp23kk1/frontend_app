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
          answer: 'คำแก้ว',
          onClick: () => {
            console.log('Answer2 Clicked');
          }
        }
      }}
      score={99}
      animationSectionItem={{ playerHealth: 10, enemyHealth: 76 }}
    />
  );
};
export default GamePlayPage;
