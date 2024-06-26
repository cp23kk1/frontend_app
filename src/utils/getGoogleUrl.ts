export const getGoogleUrl = (from: string) => {
  console.log(process.env.GOOGLE_OAUTH_REDIRECT_URL);
  const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`;
  const options = {
    redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URL as string,
    client_id: process.env.GOOGLE_OAUTH_CLIENT_ID as string,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ].join(' '),
    state: from
  };

  const qs = new URLSearchParams(options);
  return `${rootUrl}?${qs.toString()}`;
};
