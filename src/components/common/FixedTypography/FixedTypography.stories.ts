import type { Meta, StoryObj } from '@storybook/react';
import FixedTypography from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/common/FixedTypography',
  component: FixedTypography,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof FixedTypography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Audiowide: Story = {
  args: {
    children: 'Test',
    color: '#000',
    fontStyle: 'Audiowide-Regular-24'
  }
};

export const Fredoka: Story = {
  args: {
    children: 'Test',
    color: '#000',
    fontStyle: 'Fredoka-Medium-24'
  }
};

export const Mitr: Story = {
  args: {
    children: 'ทดสอบ',
    color: '#000',
    fontStyle: 'Mitr-Regular-24'
  }
};
