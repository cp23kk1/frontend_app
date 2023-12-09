import { TPos } from '@/components/common/QuestionLayout/type';
import { httpClient } from '@/services/HttpClient';
import { VocaverseResponseData } from '@/types/vocaverse/api/response';

export interface IVocabulary {
  id: number;
  word: string;
  meaning: string;
  pos: TPos;
  difficultyCEFR: 'A1' | 'A2' | 'C1' | 'C2' | 'B1' | 'B2';
}
export interface IVocaublaryResponse {
  vocabs: IVocabulary[];
}

export const getRandomVocabulary = () => {
  return httpClient
    .get<VocaverseResponseData<IVocaublaryResponse>>(`/gameplays/vocabulary`)
    .then((res) => {
      return res.data;
    });
};

export default {
  getRandomVocabulary
};
