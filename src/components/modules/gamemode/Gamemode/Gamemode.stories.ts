import type { Meta, StoryObj } from '@storybook/react';
import GameMode from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/modules/gamemode/GameMode',
  component: GameMode,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof GameMode>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const GameModeSelection: Story = {
  args: {
    listMode: [
      { modeName: 'Single Player', onClick: () => {} },
      { modeName: 'Single Player', onClick: () => {}, isSelected: true },
      { modeName: 'Single Player', onClick: () => {} },
      { modeName: 'Single Player', onClick: () => {} },
      { modeName: 'Single Player', onClick: () => {} },
      { modeName: 'Single Player', onClick: () => {} },
      { modeName: 'Single Player', onClick: () => {} },
      { modeName: 'Single Player', onClick: () => {} },
      { modeName: 'Single Player', onClick: () => {} },
      { modeName: 'Single Player', onClick: () => {} }
    ],
    scoreBoard: {
      listScore: [
        { no: 2, score: 333, userName: 'j' },
        { no: 2, score: 333, userName: 'j' },
        { no: 2, score: 333, userName: 'j' },
        { no: 2, score: 333, userName: 'j' }
      ],
      userScore: { no: 2, score: 333, userName: 'j' }
    },
    onClickSetting: () => {},
    onSelectMode: () => {}
  }
};
