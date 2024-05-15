import type { Meta, StoryObj } from '@storybook/react';
import NewProfileTab from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/common/V2/NewProfileTab',
  component: NewProfileTab,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof NewProfileTab>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const User: Story = {
  args: {
    profilePic:
      'https://static01.nyt.com/images/2021/04/30/multimedia/30xp-meme/29xp-meme-mediumSquareAt3X-v5.jpg',
    userName: 'j',
    onClickLogout: () => {},
    onClickProfile: () => {}
  }
};

export const Guest: Story = {
  args: {
    profilePic:
      'https://static01.nyt.com/images/2021/04/30/multimedia/30xp-meme/29xp-meme-mediumSquareAt3X-v5.jpg',
    userName: 'Guest',
    onClickLogout: () => {},
    onClickProfile: () => {}
  }
};
