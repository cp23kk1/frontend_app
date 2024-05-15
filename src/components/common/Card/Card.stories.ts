import type { Meta, StoryObj } from '@storybook/react';
import Card from '.';
import { getPublicPath } from '@/utils/basePath';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/common/Card',
  component: Card,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NormalCard: Story = {
  args: {
    modeName: 'Single Player',
    modeSubtitle: 'lorem ipsum dolor sit amet.',
    isSelected: false,
    modeIcon: getPublicPath('/decorations/PlanetsGameMode1.svg'),
    onClick: () => console.log('Clicked!')
  }
};
export const SelectedCard: Story = {
  args: {
    modeName: 'Single Player',
    modeSubtitle: 'lorem ipsum dolor sit amet.',
    isSelected: true,
    modeIcon: getPublicPath('/decorations/PlanetsGameMode1.svg'),
    onClick: () => console.log('Clicked!')
  }
};
export const NullCard: Story = {
  args: {
    modeName: 'Single Player',
    onClick: () => console.log('Clicked!')
  }
};
