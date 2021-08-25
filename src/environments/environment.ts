// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl:'http://localhost:8080',
  stripe:{
    testKey: 'pk_test_51JQR6bKhJlECZvZJaC1Ttw16j50YDe3lDIJnyfBAznpWh0eHrGt7qIlVal0IS89AUPpVhrh0ylpAs5yQP98Rfmpy00M66IH2HT'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
