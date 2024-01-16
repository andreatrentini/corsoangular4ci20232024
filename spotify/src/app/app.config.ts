import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  // provideRouter(routes): attiva le routes definite nel file app.routes.ts
  // provideHttpClient(): attiva il client http da utilizzare in componenti o servizi attraverso dependency injection
  providers: [provideRouter(routes), provideHttpClient()]
};
