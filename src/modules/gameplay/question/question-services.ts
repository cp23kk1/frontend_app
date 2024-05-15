import { TPos } from '@/components/common/QuestionLayout/type';
import { httpClient } from '@/services/HttpClient';
import { VocaverseResponseData } from '@/types/vocaverse/api/response';
import { ReactNode } from 'react';

export interface IVocabulary {
  id: string;
  word: string;
  meaning: string;
  pos: TPos;
  difficultyCEFR: 'A1' | 'A2' | 'C1' | 'C2' | 'B1' | 'B2';
}

export interface IQuestion {
  dataId: string;
  question: string;
  answers: IAnswer[];
  questions?: IQuestion[];
  title?: string;
  correctAnswerId: string;
  pos?: string;
  questionsType: 'vocabulary' | 'sentence' | 'passage';
}
export interface IAnswer {
  answerId: string;
  answer: string;
  correctness: boolean;
}

export interface IVocaublaryResponse {
  vocabs: IVocabulary[];
}

export interface IQuestionSinglePlayerResponse {
  passageQuestion: IQuestion;
  questions: IQuestion[];
}

export interface IQuestionMultiPlayerResponse {
  questions: IQuestion[];
}
export const getRandomVocabulary = () => {
  return httpClient
    .get<VocaverseResponseData<IVocaublaryResponse>>(`/gameplays/vocabulary`)
    .then((res) => {
      return res.data;
    });
};

export const getQuestionSinglePlayer = () => {
  return httpClient
    .get<VocaverseResponseData<IQuestionSinglePlayerResponse>>(
      `/gameplays/single-player`
    )
    .then((res) => {
      return res.data;
    });
};

export const getQuestionMultiplayer = ({
  mode,
  numberOfQuestion
}: {
  mode: string;
  numberOfQuestion: number;
}) => {
  return httpClient
    .post<VocaverseResponseData<IQuestionSinglePlayerResponse>>(
      `/gameplays/multi-player`,
      {
        mode,
        numberOfQuestion
      }
    )
    .then((res) => {
      return res.data;
    });
};
export default {
  getRandomVocabulary,
  getQuestionSinglePlayer,
  getQuestionMultiplayer
};
