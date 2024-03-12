import type { Meta, StoryObj } from '@storybook/react';
import SummarySection from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/modules/summary/SummarySection',
  component: SummarySection,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof SummarySection>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Summary: Story = {
  args: {
    table: {
      columns: ['No.', 'Question', 'Answer', ''],
      data: [
        {
          id: '2',
          word: 'Vocabulary',
          meaning: 'คำตอบ'
        },
        {
          id: '1',
          word: 'Vocabulary',
          meaning: 'คำตอบ'
        },
        {
          id: '2',
          word: 'Vocabulary',
          meaning: 'คำตอบ'
        },
        {
          id: '1',
          word: 'Vocabulary',
          meaning: 'คำตอบ'
        },
        {
          id: '2',
          word: 'Vocabulary',
          meaning: 'คำตอบ'
        },
        {
          id: '1',
          word: 'Vocabulary',
          meaning: 'คำตอบ'
        },
        {
          id: '2',
          word: 'Vocabulary',
          meaning: 'คำตอบ'
        },
        {
          id: '1',
          word: 'Vocabulary',
          meaning: 'คำตอบ'
        },
        {
          id: '2',
          word: 'Vocabulary',
          meaning: 'คำตอบ'
        },
        {
          id: '1',
          word: 'Vocabulary',
          meaning: 'คำตอบ'
        }
      ],
      onClick: (id) => {
        console.log(id);
      }
    },
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
    ]
  }
};
