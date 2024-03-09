import { httpClient } from '@/services/HttpClient';
import { VocaverseResponseData } from '@/types/vocaverse/api/response';

export interface IUserResponse {
  email?: string;
  role?: string;
  displayName?: string;
  isActive?: boolean;
  image?: string;
  isPrivate?: boolean;
}
export const getUserProfile = () => {
  return httpClient
    .get<VocaverseResponseData<IUserResponse>>(`/user/profile`)
    .then((res) => {
      return res.data;
    });
};
export default {
  getUserProfile
};
