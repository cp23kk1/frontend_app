import type { Meta, StoryObj } from '@storybook/react';
import KnowLedgeSection from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/modules/gameplay/KnowledgeSection',
  component: KnowLedgeSection,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof KnowLedgeSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NormalQuestion: Story = {
  args: {
    style: {},
    question: [],
    passageAnswers: {},
    pos: 'noun',
    type: 'vocabulary',
    answers: []
  }
};
