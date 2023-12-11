const BASE_PATH = process.env.ASSET_PREFIX;
export const getPublicPath = (path: string) => {
  return `${BASE_PATH ?? ''}/assets${path}`;
};
export const getPublicPathPageRounting = (path: string) => {
  return `${process.env.ENV === 'prod' ? BASE_PATH : ''}${path}`;
};
