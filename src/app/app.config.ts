import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ROOT_REDUCERS } from './state/app.state';
import { CountriesEffects } from './state/effects/countries.effects';
import { HttpClientModule } from '@angular/common/http';
import { WeathersEffects } from './state/effects/weathers.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      BrowserModule,
      BrowserAnimationsModule,
    ]),
    provideStore(ROOT_REDUCERS),
    provideEffects(
      CountriesEffects,
      WeathersEffects
    ),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    importProvidersFrom(HttpClientModule),

  ],
};
