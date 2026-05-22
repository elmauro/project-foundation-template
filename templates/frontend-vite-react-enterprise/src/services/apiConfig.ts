export const apiConfig = {
  appName: import.meta.env.VITE_APP_NAME ?? '__FRONTEND_APP_NAME__',
  apiBaseAuth: import.meta.env.VITE_API_BASE_AUTH ?? '',
  apiBaseApp: import.meta.env.VITE_API_BASE_APP ?? '',
  programId: import.meta.env.VITE_PROGRAM_ID ?? '',
  awsRegion: import.meta.env.VITE_AWS_REGION ?? '__AWS_REGION__',
  cognitoUserPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID ?? '',
  cognitoClientId: import.meta.env.VITE_COGNITO_CLIENT_ID ?? '',
};
