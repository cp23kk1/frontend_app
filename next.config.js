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

  //  WS_URL: wsUrl
};
// if (isEnvironment(environment, 'local')) {
//   destination = `/bizone/:path*`; // local environment.
// }
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
  publicRuntimeConfig: { basePath },
  assetPrefix: basePath,
  env
};

// Include rewrites in development
nextConfig = {
  ...nextConfig,
  rewrites
};

// Export Configuration
module.exports = nextConfig;
