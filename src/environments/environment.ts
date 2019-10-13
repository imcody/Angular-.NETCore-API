// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --configuration=stg` then `environment.stg.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  hmr: false,
  apiBaseUrl: 'http://localhost:21021',
  appBaseUrl: 'http://localhost:9200',
  blobStorageUrl: 'https://{UPDATE_HERE}.blob.core.windows.net/{UPDATE_HERE}/'
};
