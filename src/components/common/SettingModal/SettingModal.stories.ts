import type { Meta, StoryObj } from '@storybook/react';
import SettingModal from '.';
import { getPublicPath } from '@/utils/basePath';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/common/SettingModal',
  component: SettingModal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof SettingModal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NormalQuestion: Story = {
  args: {
    isModalOpen: true,
    charaterPic: getPublicPath(`/character/player/robot.svg`),
    musicValue: '50',
    soundEffectValue: '75',
    volumeValue: '100',
    onClickChangeButton: () => {
      console.log('change');
    },
    onClose: () => {
      console.log('close');
    },
    onVolumechange: (value: string) => {
      console.log(value);
    },
    onMusicChange: (value: string) => {
      console.log(value);
    },
    onSoundEffectChange: (value: string) => {
      console.log(value);
    }
  }
};
