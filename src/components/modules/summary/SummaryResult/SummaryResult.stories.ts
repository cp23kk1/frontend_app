import type { Meta, StoryObj } from '@storybook/react';
import SummaryResult from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/modules/summary/SummaryResult',
  component: SummaryResult,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof SummaryResult>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Result: Story = {
  args: {
    mode: 'Single Player',
    bestScore: 999,
    currentScore: 99,
    result: {
      tabs: [
        {
          children: 'Vocabulary',
          isSelected: true,
          onClick: () => console.log('Clicked!')
        },
        {
          children: 'Sentence',
          isSelected: false,
          onClick: () => console.log('Clicked!')
        },
        {
          children: 'Passage',
          isSelected: false,
          onClick: () => console.log('Clicked!')
        }
      ],
      table: {
        columns: ['No.', 'Question', 'Answer', ''],
        data: [
          {
            id: '1',
            word: 'Vocabulary',
            meaning: 'คำตอบ'
          }
        ],
        onClick: (id) => {
          console.log(id);
        }
      }
    },
    footer: {
      options: [
        {
          iconName: 'Home',
          label: 'Home',
          onClick: () => console.log('Home clicked!')
        },
        {
          iconName: 'Retry',
          label: 'Retry',
          onClick: () => console.log('Retry clicked!')
        },
        {
          iconName: 'Menu',
          label: 'Mode',
          onClick: () => console.log('Mode clicked!')
        }
      ]
    }
  }
};
