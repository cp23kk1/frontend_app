import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { ReactNode } from 'react';

const settingSelector = (state: RootState) => state.core.setting;

const volumeSelector = createSelector(settingSelector, (setting): string => {
  return setting.volume;
});
const musicSelector = createSelector(settingSelector, (setting): string => {
  return setting.music;
});
const soundEffectSelector = createSelector(
  settingSelector,
  (setting): string => {
    return setting.soundEffect;
  }
);

export default {
  settingSelector,
  volumeSelector,
  musicSelector,
  soundEffectSelector
};
