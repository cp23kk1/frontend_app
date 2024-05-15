import type { Meta, StoryObj } from '@storybook/react';
import ScoreBoard from '.';
import { getPublicPath } from '@/utils/basePath';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/common/ScoreBoard',
  component: ScoreBoard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof ScoreBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NormalScoreBoard: Story = {
  args: {
    listScore: [
      { no: 1, score: 99, userName: 'adfasdf', userImage: '', userId: 123 },
      { no: 2, score: 99, userName: 'adfasdf', userImage: '', userId: 123 }
    ],
    userScore: {
      no: 2,
      score: 99,
      userName: 'adfasdf',
      userImage: '',
      userId: 123
    }
  }
};
