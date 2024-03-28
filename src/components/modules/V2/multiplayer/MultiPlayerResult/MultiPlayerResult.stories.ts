import type { Meta, StoryObj } from '@storybook/react';
import MultiplayerResult from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/modules/V2/multiplayer/MultiplayerResult',
  component: MultiplayerResult,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof MultiplayerResult>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    role: 'joiner',
    players: [
      { displayName: 'p1', score: 999 },
      { displayName: 'p1', score: 999 },
      { displayName: 'p1', score: 999 },
      { displayName: 'p1', score: 999 },
      { displayName: 'p1', score: 999 },
      { displayName: 'p1', score: 999 },
      { displayName: 'p1', score: 999 },
      { displayName: 'p1', score: 999 }
    ]
  }
};
