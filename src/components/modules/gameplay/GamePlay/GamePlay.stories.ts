import type { Meta, StoryObj } from '@storybook/react';
import Gameplay from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/modules/gameplay/Gameplay',
  component: Gameplay,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Gameplay>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NormalQuestion: Story = {
  args: {
    knowledgeSectionItem: {
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
    },
    animationSectionItem: { enemyHealth: 80, playerHealth: 97 },
    score: 88
  }
};
