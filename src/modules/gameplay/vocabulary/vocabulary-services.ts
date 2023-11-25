import { httpClient } from '@/services/HttpClient';
import { VocaverseResponseData } from '@/types/vocaverse/api/response';

export interface IVocabulary {
  ID: 1;
  Word: string;
  Meaning: string;
  POS: string;
  DifficultyCEFR: 'A1' | 'A2' | 'C1' | 'C2' | 'B1' | 'B2';
}

export const getRandomVocabulary = () => {
  return httpClient
    .get<VocaverseResponseData<IVocabulary>>(`/api/gameplays/vocabulary`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};

export default {
  getRandomVocabulary
};
