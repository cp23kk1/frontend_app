export interface IWord {
  word: string;
  meanings: {
    antonyms: string[];
    definitions: any;
    partOfSpeech: string;
    synonyms: string[];
  }[];
  phonetics: any[];
  sourceUrls: string[];
}
