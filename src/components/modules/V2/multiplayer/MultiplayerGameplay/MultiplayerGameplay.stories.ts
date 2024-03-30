import type { Meta, StoryObj } from '@storybook/react';
import MultiplayerGameplay from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/modules/V2/multiplayer/MultiplayerGameplay',
  component: MultiplayerGameplay,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof MultiplayerGameplay>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    currentRound: 6,
    maxRound: 10,
    listPlayer: {
      maxPlayer: 10,
      players: [
        {
          id: 12,
          isReady: false,
          displayName: 'test',
          img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
          rank: '1',
          score: 999
        },
        {
          id: 12,
          isReady: false,
          displayName: 'test',
          img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
          rank: '1',
          score: 999
        },
        {
          id: 12,
          isReady: false,
          displayName: 'test',
          img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
          rank: '1',
          score: 999
        },
        {
          id: 12,
          isReady: false,
          displayName: 'test',
          img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
          rank: '1',
          score: 999
        },
        {
          id: 12,
          isReady: false,
          displayName: 'test',
          img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
          rank: '1',
          score: 999
        },
        {
          id: 12,
          isReady: false,
          displayName: 'test',
          img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
          rank: '1',
          score: 999
        },
        {
          id: 12,
          isReady: false,
          displayName: 'test',
          img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
          rank: '1',
          score: 999
        },
        {
          id: 12,
          isReady: false,
          displayName: 'test',
          img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
          rank: '1',
          score: 999
        }
      ]
    },
    multiplayerQuestion: {
      extra: 'asdf',
      question: 'sdfafdasdf',
      answers: [
        {
          answerId: '',
          answer: 'asdfasdf',
          state: 'normal',
          onClick: () => {}
        },
        {
          answerId: '',
          answer: 'asdfasdf',
          state: 'normal',
          onClick: () => {}
        },
        {
          answerId: '',
          answer: 'asdfasdf',
          state: 'normal',
          onClick: () => {}
        },
        { answerId: '', answer: 'asdfasdf', state: 'normal', onClick: () => {} }
      ]
    }
  }
};
