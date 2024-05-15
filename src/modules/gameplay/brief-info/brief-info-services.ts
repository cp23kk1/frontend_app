import axios from 'axios';

export const getBreifInfo = (word: string) => {
  return axios
    .get<any>(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((res) => {
      return res.data;
    });
};

export default {
  getBreifInfo
};
