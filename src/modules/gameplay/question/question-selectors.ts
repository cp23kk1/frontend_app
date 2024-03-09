import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import {
  IQuestionSinglePlayerResponse,
  IVocabulary
} from './question-services';

const gameplayQuestionSelector = (state: RootState) => state.gameplay.question;

const vocabularySelector = createSelector(
  gameplayQuestionSelector,
  (gamePlay): IVocabulary[] => {
    return gamePlay.vocabulary;
  }
);

const questionsSeletor = createSelector(
  gameplayQuestionSelector,
  (gamePlay): IQuestionSinglePlayerResponse | undefined => {
    if (gamePlay.question) {
      let temp: IQuestionSinglePlayerResponse = {
        passageQuestion: gamePlay.question.passageQuestion,
        questions: gamePlay.question.questions
      };

      temp.questions = temp.questions.map((question) => {
        let correctAnswer = question.answers.find(
          (answer) => answer.correctness
        );
        return {
          ...question,
          question:
            question.questionsType === 'sentence'
              ? question.question
                  ?.toString()
                  .replace(`${correctAnswer?.answer}`, `??`)
              : question.question
        };
      });
      console.log(temp);
      return temp;
    }
    return undefined;
  }
);
const isLoadingVocabularySelector = createSelector(
  gameplayQuestionSelector,
  (gamePlay) => {
    return gamePlay.isVocabularyLoading;
  }
);
const isQuestionsLoadingSelector = createSelector(
  gameplayQuestionSelector,
  (gamePlay) => {
    return gamePlay.isQuestionsLoading;
  }
);
export default {
  gameplayQuestionSelector,
  vocabularySelector,
  questionsSeletor,
  isLoadingVocabularySelector,
  isQuestionsLoadingSelector
};
