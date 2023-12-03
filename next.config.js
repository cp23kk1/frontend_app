/** @type {import('next').NextConfig} */
const generateAppInfo = require('./appinfo.js');

const apiUrl = process.env.API_URL || 'http://localhost:8080';
const environment = process.env.ENVIRONMENT;
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
  ASSER_PREFIX: environment === 'prod' ? undefined : `/${environment}`

  //  WS_URL: wsUrl
};
// if (isEnvironment(environment, 'local')) {
//   destination = `/bizone/:path*`; // local environment.
// }
let destination = `${env.API_URL}${env.PRE_FIX_API}/:path*`;
const rewrites = () => {
  return [
    {
      source: `${env.PRE_FIX_API}/:path*`,
      destination,
      basePath: false
    }
  ];
};
let nextConfig = {
  swcMinify: true,
  basePath: environment === 'prod' ? '' : `/${environment}`,
  env
};

if (!isProduction) nextConfig = { ...nextConfig, rewrites };

module.exports = nextConfig;
