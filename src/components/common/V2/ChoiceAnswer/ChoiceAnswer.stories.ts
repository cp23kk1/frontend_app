import type { Meta, StoryObj } from '@storybook/react';
import ChoiceAnswer from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/common/V2/ChoiceAnswer',
  component: ChoiceAnswer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof ChoiceAnswer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NormalButton: Story = {
  args: { answer: 'asdfasdfa', state: 'normal' }
};
export const CorrectButton: Story = {
  args: { answer: 'asdfasdfa', state: 'correct' }
};
export const InCorrectButton: Story = {
  args: { answer: 'asdfasdfa', state: 'incorrect' }
};
