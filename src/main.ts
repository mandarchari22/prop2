// import 'zone.js'; // Required for Angular

// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideStore, StoreModule } from '@ngrx/store';
// import { provideStoreDevtools, StoreDevtools, } from '@ngrx/store-devtools';

// import { AppComponent } from './app/app.component';
// import { environment } from './environment.prod';
// import { appReducer } from './app/store/app.state';
// // import { environment } from './environment';

// bootstrapApplication(AppComponent, {
//   providers: [
//     // provideStore(appReducer),
//   //  provideStore(appReducer),
//   //   provideStoreDevtools({
//   //     logOnly: environment.production, // Restrict extension to log-only mode
//   //   })
//   ]
// });
// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; 
import { Router } from '@angular/router';

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));

