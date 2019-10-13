// build prod running command in the main dir (bash):
// npm run build:lv

export const environment = {
    production: true,
    hmr: false,
    apiBaseUrl: 'http://localhost:21021',
    appBaseUrl: 'http://localhost:9200',
    blobStorageUrl: 'https://{UPDATE_HERE}.blob.core.windows.net/{UPDATE_HERE}/'
};
