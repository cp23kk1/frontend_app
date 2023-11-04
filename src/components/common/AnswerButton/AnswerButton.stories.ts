import type { Meta, StoryObj } from '@storybook/react';
import AnswerButton from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/common/AnswerButton',
  component: AnswerButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof AnswerButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NormalAnswer: Story = {
  args: { children: 'superman', onClick: () => {}, state: 'normal' }
};

export const CorrectAnswer: Story = {
  args: {
    children: 'superman',
    state: 'correct'
  }
};
export const IncorrectAnswer: Story = {
  args: {
    children: 'superman',
    state: 'incorrect'
  }
};
