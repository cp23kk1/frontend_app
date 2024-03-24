import type { Meta, StoryObj } from '@storybook/react';
import Home from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/modules/home/Home',
  component: Home,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NormalQuestion: Story = {
  args: {
    modes: [
      {
        modeName: 'SINGLE PLAYER',
        modeDesc: 'Single play mode play for train for english skills.',
        modeExtraInfo: 'Best Score: 999',
        modeButtons: [{ iconName: 'Play', onClick: () => {}, text: 'PLAY NOW' }]
      },
      {
        modeName: 'MULTIPLAYER',
        modeDesc: 'Multiplayer mode!! That u can play for fun!!!',
        modeExtraInfo: 'I HAVE A CODE',
        modeButtons: [
          { iconName: 'Play', onClick: () => {}, text: 'PLAY QUICKLY' },
          { iconName: 'Group', onClick: () => {}, text: 'PLAY QUICKLY' }
        ]
      }
    ]
  }
};
