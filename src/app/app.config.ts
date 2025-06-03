import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from '../environment.prod';
import { provideStore } from '@ngrx/store';
import { appReducer } from './store/app.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
        // provideStore(),
    provideStore(appReducer),
    provideStoreDevtools({
      logOnly: environment.production, // Restrict extension to log-only mode
    }), provideClientHydration()]
};

