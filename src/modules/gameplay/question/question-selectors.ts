import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import {
  IQuestion,
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
  (gamePlay): IQuestion[] => {
    if (gamePlay.questions) {
      let temp: IQuestion[] = gamePlay.questions;

      temp = temp.map((question) => {
        let correctAnswer = question.answers?.find(
          (answer) => answer.correctness
        );
        var regex = new RegExp(correctAnswer?.answer || '', 'i');
        return question.questionsType === 'vocabulary'
          ? question
          : {
              ...question,
              question:
                question.questionsType === 'sentence'
                  ? question.question?.toString().replace(regex, `??`)
                  : question.questionsType === 'passage'
                  ? ''
                  : question.question,
              questions: question.questions
                ? question.questions.map((question) => {
                    let correctAnswer = question.answers?.find(
                      (answer) => answer.correctness
                    );
                    var regex = new RegExp(correctAnswer?.answer || '', 'i');
                    return {
                      ...question,
                      question:
                        question.questionsType === 'sentence'
                          ? question.question?.toString().replace(regex, `??`)
                          : question.question
                    };
                  })
                : undefined,
              answers: question.answers ?? []
            };
      });

      return temp;
    }
    return [];
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
