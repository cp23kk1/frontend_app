import type { Meta, StoryObj } from '@storybook/react';
import ModalJoinLobby from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/common/V2/ModalJoinLobby',
  component: ModalJoinLobby,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof ModalJoinLobby>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const JoinWithID: Story = {
  args: {
    currentMode: 'joinWithID',
    onChangeId: (id) => {}
  }
};
export const QuickJoin: Story = {
  args: {
    currentMode: 'quickJoin',
    onChangeId: (id) => {},
    lobby: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  }
};
