/** @type {import('next').NextConfig} */
const generateAppInfo = require('./appinfo.js');

const apiUrl = process.env.API_URL || 'http://localhost:8080';
const environment = process.env.ENV;
const isProduction = process.env.NODE_ENV === 'production';
const appVersion = process.env.APP_VERSION || '-';
const commitID = process.env.COMMIT_ID || '-';
generateAppInfo(appVersion, commitID);
let env = {
  ENVIRONMENT: environment,
  PRE_FIX_API: environment === 'prod' ? `/api` : `/${environment}/api`,
  API_URL: apiUrl
};

env = {
  ...env,
  API_URL: `${apiUrl}${env.PRE_FIX_API}`,
  ASSET_PREFIX: environment === 'prod' ? '' : `/${environment}`
};
const basePath = environment === 'prod' ? '' : `/${environment}`;
console.log(basePath);
const rewrites = () => {
  return [
    {
      source: `/:path*`,
      destination: `${basePath}/:path*`
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
  assetPrefix: basePath,
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
