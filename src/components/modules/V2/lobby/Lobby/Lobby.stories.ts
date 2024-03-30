import type { Meta, StoryObj } from '@storybook/react';
import Lobby from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/modules/V2/lobby/Lobby',
  component: Lobby,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Lobby>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NormalQuestion: Story = {
  args: {
    players: [
      {
        id: 12,
        displayName: 'jedi',
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        isReady: false
      },
      {
        id: 12,
        displayName: 'jedi',
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        isReady: false
      }
    ],
    roomID: '',
    currentPlayer: {
      id: 12,
      displayName: 'jedi',
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      isReady: false
    },
    onClickLeave: () => {}
  }
};
