import type { Meta, StoryObj } from '@storybook/react';
import UserProfile from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/modules/V2/profile/UserProfile',
  component: UserProfile,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof UserProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NormalQuestion: Story = {
  args: {
    account: {
      onConfirm: () => {},
      editedDisplayName: '',
      isEditMode: false,
      onChangeDisplayName: (input) => {},
      onChangeEditMode: () => {},
      displayName: '',
      email: '',
      since: '',
      onSingOut: () => {},
      profilePic: ''
    },
    mode: 'account',
    stats: {
      barStats: [
        { maxScore: '1000', score: '750', progress: '75', title: 'Noun' },
        { maxScore: '1000', score: '750', progress: '75', title: 'Noun' },
        { maxScore: '1000', score: '750', progress: '75', title: 'Noun' },
        { maxScore: '1000', score: '750', progress: '75', title: 'Noun' },
        { maxScore: '1000', score: '750', progress: '75', title: 'Noun' },
        { maxScore: '1000', score: '750', progress: '75', title: 'Noun' }
      ],
      overAllAcc: '75',
      overAllMaxScore: '1000',
      overAllScore: '750',
      vocabularyAcc: '75',
      vocabularyMaxScore: '1000',
      vocabularyScore: '750',
      passageAcc: '75',
      passageMaxScore: '1000',
      passageScore: '750',
      sentenceAcc: '75',
      sentenceMaxScore: '1000',
      sentenceScore: '750'
    },
    onClickBack: () => {}
  }
};
