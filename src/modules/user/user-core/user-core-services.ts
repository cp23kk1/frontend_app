import { httpClient } from '@/services/HttpClient';
import { VocaverseResponseData } from '@/types/vocaverse/api/response';

export interface IUserResponse {
  id?: number;
  email?: string;
  role?: string;
  displayName?: string;
  isActive?: boolean;
  image?: string;
  isPrivate?: boolean;
  createAt?: string;
}
export interface IUserStatistic {
  overall: number;
  overallCorrect: number;
  countPassage: number;
  countPassageCorrect: number;
  countSentence: { count: number; tense: string }[];
  countSentenceCorrect: { count: number; tense: string }[];
  countVocabulary: { count: number; pos: string }[];
  countVocabularyCorrect: { count: number; pos: string }[];
}
export const getUserProfile = () => {
  return httpClient
    .get<VocaverseResponseData<IUserResponse>>(`/user/profile`)
    .then((res) => {
      return res.data;
    });
};

export const getUserStatistic = () => {
  return httpClient
    .get<VocaverseResponseData<IUserStatistic>>(`/user/statistic`)
    .then((res) => {
      return res.data;
    });
};

export const updateUserDisplayName = (newDisplayName: string) => {
  return httpClient.put<VocaverseResponseData<IUserStatistic>>(
    `/user/profile`,
    {
      displayName: newDisplayName
    }
  );
};
export default {
  getUserProfile,
  getUserStatistic,
  updateUserDisplayName
};
