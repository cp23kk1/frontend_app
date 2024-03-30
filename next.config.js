/** @type {import('next').NextConfig} */
const generateAppInfo = require('./appinfo.js');

const apiUrl = process.env.API_URL || 'http://localhost:8080';
const prodApiUrl = process.env.PROD_API_URL || 'http://localhost:8080';
const wsApiUrl = process.env.WS_URL || 'ws://localhost:8080';
const prodWsUrl = process.env.PROD_WS_URL || 'ws://localhost:8080';

const environment = process.env.ENV;
const isProduction = process.env.NODE_ENV === 'production';
const appVersion = process.env.APP_VERSION || '-';
const commitID = process.env.COMMIT_ID || '-';
const GOOGLE_OAUTH_REDIRECT_URL = process.env.GOOGLE_OAUTH_REDIRECT_URL;
const GOOGLE_OAUTH_CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const GOOGLE_OAUTH_CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET;

generateAppInfo(appVersion, commitID);
let env = {
  ENVIRONMENT: environment,
  PRE_FIX_API: environment === 'prod' ? `/kk1/api` : `/${environment}/api`,
  API_URL: apiUrl,
  GOOGLE_OAUTH_CLIENT_ID: GOOGLE_OAUTH_CLIENT_ID,
  GOOGLE_OAUTH_CLIENT_SECRET: GOOGLE_OAUTH_CLIENT_SECRET,
  GOOGLE_OAUTH_REDIRECT_URL: GOOGLE_OAUTH_REDIRECT_URL
};

env = {
  ...env,
  API_URL: `${environment === 'prod' ? prodApiUrl : apiUrl}${env.PRE_FIX_API}`,
  ASSET_PREFIX: environment === 'prod' ? '/kk1' : `/${environment}`,
  WS_URL: `${environment === 'prod' ? prodWsUrl : wsApiUrl}${env.PRE_FIX_API}`
};
const basePath = environment === 'prod' ? '' : `/${environment}`;
console.log(basePath);
const rewrites = () => {
  return [
    {
      source: `/:path*`,
      destination: `${basePath}/kk1/:path*`
    }
  ];
};

// Next.js Configuration
/** @type {import('next').NextConfig} */
let nextConfig = {
  swcMinify: true,
  // publicRuntimeConfig: { basePath },
  basePath: basePath,
  publicRuntimeConfig: {
    basePath: environment === 'prod' ? '' : basePath
  },
  assetPrefix: environment === 'prod' ? '/kk1' : basePath,
  output: 'standalone',
  env
};

// Include rewrites in development
nextConfig = {
  ...nextConfig,
  rewrites
};

// Export Configuration
module.exports = nextConfig;
