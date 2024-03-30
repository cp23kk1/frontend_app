import type { Meta, StoryObj } from '@storybook/react';
import MultiPlayerQuestion from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/modules/V2/multiplayer/MultiPlayerQuestion',
  component: MultiPlayerQuestion,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof MultiPlayerQuestion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    extra: 'asdf',
    question: 'sdfafdasdf',
    answers: [
      { answerId: '', answer: 'asdfasdf', state: 'normal', onClick: () => {} },
      { answerId: '', answer: 'asdfasdf', state: 'normal', onClick: () => {} },
      { answerId: '', answer: 'asdfasdf', state: 'normal', onClick: () => {} },
      { answerId: '', answer: 'asdfasdf', state: 'normal', onClick: () => {} }
    ]
  }
};
