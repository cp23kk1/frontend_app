import type { Meta, StoryObj } from '@storybook/react';
import CardProgress from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/common/V2/CardProgress',
  component: CardProgress,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof CardProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NormalButton: Story = {
  args: {
    title: 'Noun',
    maxScore: '1000',
    score: '750',
    progress: '75',
    key: 'asdf'
  }
};
