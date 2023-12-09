import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { IVocabulary } from './vocabulary-services';

const gameplayVocabularySelector = (state: RootState) =>
  state.gameplay.vocabularies;

const vocabularySelector = createSelector(
  gameplayVocabularySelector,
  (gamePlay): IVocabulary[] => {
    return gamePlay.vocabulary;
  }
);
const isLoadingVocabularySelector = createSelector(
  gameplayVocabularySelector,
  (gamePlay) => {
    return gamePlay.isVocabularyLoading;
  }
);
export default {
  gameplayVocabularySelector,
  vocabularySelector,
  isLoadingVocabularySelector
};
