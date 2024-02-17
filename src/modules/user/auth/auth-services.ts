import { httpClient } from '@/services/HttpClient';

export const guestLogin = () => {
  return httpClient.post(`/auth/guest`);
};
export const logout = () => {
  return httpClient.post(`/auth/sign-out`);
};
export const refresh = () => {
  return httpClient.post(`/auth/refresh`);
};
export default {
  guestLogin,
  logout,
  refresh
};
