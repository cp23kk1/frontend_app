import type { Meta, StoryObj } from '@storybook/react';
import TableLayout from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/common/TableLayout',
  component: TableLayout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof TableLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Table: Story = {
  args: {
    columns: ['No.', 'Question', 'Answer', ''],
    data: [
      {
        id: 2,
        question: 'Vocabulary',
        answer: 'คำตอบ'
      },
      {
        id: 1,
        question: 'Vocabulary',
        answer: 'คำตอบ'
      },
      {
        id: 2,
        question: 'Vocabulary',
        answer: 'คำตอบ'
      },
      {
        id: 1,
        question: 'Vocabulary',
        answer: 'คำตอบ'
      },
      {
        id: 2,
        question: 'Vocabulary',
        answer: 'คำตอบ'
      },
      {
        id: 1,
        question: 'Vocabulary',
        answer: 'คำตอบ'
      },
      {
        id: 2,
        question: 'Vocabulary',
        answer: 'คำตอบ'
      },
      {
        id: 1,
        question: 'Vocabulary',
        answer: 'คำตอบ'
      },
      {
        id: 2,
        question: 'Vocabulary',
        answer: 'คำตอบ'
      },
      {
        id: 1,
        question: 'Vocabulary',
        answer: 'คำตอบ'
      }
    ],
    onClick: (id) => {
      console.log(id);
    }
  }
};
