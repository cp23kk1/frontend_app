import type { Meta, StoryObj } from '@storybook/react';
import LandingButton from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/common/LandingButton',
  component: LandingButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof LandingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NormalQuestion: Story = {
  args: {
    text: 'asdfasdf',
    onClick: () => {
      console.log('click');
    }
  }
};
