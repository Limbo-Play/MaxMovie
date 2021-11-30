import Auth from '@aws-amplify/auth'

const {
  REACT_APP_AWS_URL,
  REACT_APP_AWS_REGION,
  REACT_APP_AWS_PINPOINT_ID,
  REACT_APP_DOMAIN,
  REACT_APP_USER_POOL_ID,
  REACT_APP_USER_POOL_WEBCLIENT_ID,
} = process.env

async function urlOpener(url, redirectUrl) {}

const oauth = {
  domain: REACT_APP_DOMAIN,
  scope: [
    'phone',
    'email',
    'profile',
    'openid',
    'aws.cognito.signin.user.admin',
  ],
  redirectSignIn: `binger://signin`,
  redirectSignOut: 'binger://',
  responseType: 'code',
  federationTarget: 'COGNITO_USER_POOLS',
  urlOpener,
}

export const awsConfig = {
  Auth: {
    mandatorySignIn: true,
    region: REACT_APP_AWS_REGION,
    userPoolId: REACT_APP_USER_POOL_ID,
    userPoolWebClientId: REACT_APP_USER_POOL_WEBCLIENT_ID,
    oauth,
  },
  API: {
    endpoints: [
      {
        name: 'BingerApis-APIs',
        endpoint: REACT_APP_AWS_URL,
        region: REACT_APP_AWS_REGION,
        custom_header: async () => {
          const auth = `Bearer ${(await Auth.currentSession())
            .getIdToken()
            .getJwtToken()}`
          return {
            Authorization: auth,
          }
        },
      },
    ],
  },
  Analytics: {
    disabled: false,
    autoSessionRecord: true,
    AWSPinpoint: {
      appId: REACT_APP_AWS_PINPOINT_ID,
      region: REACT_APP_AWS_REGION,
      mandatorySignIn: true,
    },
  },

  PushNotifications: {
    appId: REACT_APP_AWS_PINPOINT_ID,
    // Amazon service region
    requestIOSPermissions: false,
  },
}
