import type { Meta, StoryObj } from '@storybook/react';
import NewButton from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/common/V2/NewButton',
  component: NewButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof NewButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const UnselectButton: Story = {
  args: {
    label: 'Home',
    state: 'unselected',
    onClick: () => console.log('Clicked!')
  }
};

export const IconUnselectedButton: Story = {
  args: {
    iconName: 'Exit',
    label: 'Home',
    state: 'unselected',
    onClick: () => console.log('Clicked!')
  }
};
export const IconUnselectedLightButton: Story = {
  args: {
    iconName: 'Exit',
    label: 'Home',
    state: 'unselected-light',
    onClick: () => console.log('Clicked!')
  }
};
export const IconSelectedButton: Story = {
  args: {
    iconName: 'Exit',
    label: 'Home',
    state: 'selected',
    onClick: () => console.log('Clicked!')
  }
};
export const IconDangerButton: Story = {
  args: {
    iconName: 'Exit',
    label: 'Home',
    danger: true,
    onClick: () => console.log('Clicked!')
  }
};

export const DisabledButton: Story = {
  args: {
    label: 'Home',
    disable: true,
    onClick: () => console.log('Clicked!')
  }
};
