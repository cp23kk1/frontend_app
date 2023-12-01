import { TQuestion } from './type';
import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { IVocabulary } from './vocabulary-services';

const gameplayVocabularySelector = (state: RootState) =>
  state.gameplay.vocabularies;

const vocabularyQuestionSelector = createSelector(
  gameplayVocabularySelector,
  (gamePlay) => {
    return gamePlay.vocabulary.map((value, vIndex, arr) => {
      return {
        // question: value.word,
        // ans1: value.meaning,
        // pos: value.pos,
        // ans2: arr.filter((_, index) => index !== vIndex)[
        //   Math.floor(Math.random() * arr.length - 1)
        // ].meaning
      };
    });
  }
);
const vocabularySelector = createSelector(
  gameplayVocabularySelector,
  (gamePlay): IVocabulary[] => {
    return gamePlay.vocabulary;
    // return [
    //   {
    //     id: 1,
    //     word: 'string',
    //     meaning: 'ข้อความ',
    //     pos: 'adjective',
    //     difficultyCEFR: 'A1'
    //   },
    //   {
    //     id: 2,
    //     word: 'a',
    //     meaning: 'หนึ่ง',
    //     pos: 'noun',
    //     difficultyCEFR: 'A1'
    //   }
    // ];
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
  vocabularyQuestionSelector,
  vocabularySelector,
  isLoadingVocabularySelector
};
