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
    briefInfo: {
      isShow: true,
      definition: '',
      onClickMore: () => {},
      word: ''
    },
    knowledgeSectionItem: {
      onDragEnd: (event) => {},
      onValidatePassage: () => {},
      passageAnswers: {},
      onUnselectePassageAnswer: (index) => {},
      question: [],
      pos: 'noun',
      type: 'vocabulary',
      onAnswer: (meaning) => {
        console.log(meaning);
      },
      answers: [
        {
          children: 'คำถาม',
          correctness: true,

          state: 'correct'
        },
        {
          children: 'คำตอบ',
          correctness: true,
          state: 'incorrect'
        }
      ]
    },
    animationSectionItem: { enemyHealth: 80, playerHealth: 97, playerImg: '' },
    score: 88
  }
};
