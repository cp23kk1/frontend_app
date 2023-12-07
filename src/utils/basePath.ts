const BASE_PATH = process.env.ASSET_PREFIX;
export const getPublicPath = (path: string) => {
  return `${BASE_PATH}/assets${path}`;
};
