import type { Meta, StoryObj } from '@storybook/react';
import GameOverFooter from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/modules/summary/GameOverFooter',
  component: GameOverFooter,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof GameOverFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Footer: Story = {
  args: {
    options: [
      {
        iconName: 'Home',
        lebel: 'Home',
        onClick: () => console.log('Home clicked!')
      },
      {
        iconName: 'Retry',
        lebel: 'Retry',
        onClick: () => console.log('Retry clicked!')
      },
      {
        iconName: 'Menu',
        lebel: 'Mode',
        onClick: () => console.log('Mode clicked!')
      },
    ]
  }
};
