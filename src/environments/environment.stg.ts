// build prod running command in the main dir (bash):
// npm run build:stg

export const environment = {
  production: true,
  hmr: false,
  apiBaseUrl: 'https://responsible-system-api.azurewebsites.net/',
  appBaseUrl: '/',
  blobStorageUrl: 'https://{UPDATE_HERE}.blob.core.windows.net/{UPDATE_HERE}/'
};
