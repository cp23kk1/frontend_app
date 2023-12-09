import type { Meta, StoryObj } from '@storybook/react';
import DynamicTypography from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/common/DynamicTypography',
  component: DynamicTypography,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof DynamicTypography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Dynamic_Typography: Story = {
  args: {
    children: 'Test',
    color: '#000',
    family: 'Audiowide',
    size: 48,
    weight: 'Regular'
  }
};
