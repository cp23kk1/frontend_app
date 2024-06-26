import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/common/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NormalButton: Story = {
  args: {
    iconName: 'Home',
    label: 'Home',
    onClick: () => console.log('Clicked!')
  }
};
export const DisabledButton: Story = {
  args: {
    iconName: 'Home',
    label: 'Home',
    disable: true,
    onClick: () => console.log('Clicked!')
  }
};
