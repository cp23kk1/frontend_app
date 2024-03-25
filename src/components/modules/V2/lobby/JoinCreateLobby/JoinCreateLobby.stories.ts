import type { Meta, StoryObj } from '@storybook/react';
import JoinCreateLobby from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/modules/V2/lobby/JoinCreateLobby',
  component: JoinCreateLobby,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof JoinCreateLobby>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NormalQuestion: Story = {
  args: {
    currentPage: 'create',
    isJoinButtonDisabled: false,
    onChangeRoomID: (e) => {},
    onClickBack: () => {},
    onClickJoin: () => {},
    onClickPlayQuickly: () => {},
    onClickPlay: () => {},
    createLobby: {
      onClickCloseLobby: () => {},
      gameSetting: {
        mode: 'all',
        onChangeMode: (e) => {},
        onChangeSpeed: (e) => {},
        onChangeNumQuestions: (e) => {},
        speed: 'slow',
        numQuestions: 10
      },
      roomID: '12312',
      players: [
        { displayName: 'jedi', isReady: true, img: '' },
        { displayName: 'jedi', isReady: false, img: '' },
        { displayName: 'player3', isReady: false, img: '' }
      ]
    }
  }
};
