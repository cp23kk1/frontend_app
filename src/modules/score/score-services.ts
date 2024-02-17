import { TPos } from '@/components/common/QuestionLayout/type';
import { httpClient } from '@/services/HttpClient';
import { VocaverseResponseData } from '@/types/vocaverse/api/response';

export interface IWeeklyScoreBoard {
  score: number;
  week: number;
  startDate: string;
  endDate: string;
  email: string;
  displayName: string;
}
export interface IWeeklyScoreBoardResponse {
  weeklyScore: IWeeklyScoreBoard[];
}

export const getTopLeaderBoard = () => {
  return httpClient
    .get<VocaverseResponseData<IWeeklyScoreBoardResponse>>(`/score/scoreboard`)
    .then((res) => {
      return res.data;
    });
};

export default {
  getTopLeaderBoard
};
