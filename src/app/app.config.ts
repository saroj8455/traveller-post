import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactiveFormsModule } from '@angular/forms';
import { authGuard } from './auth.guard';
import { MultiSelectDirective } from './multi-select.directive';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    ReactiveFormsModule,
    provideAnimationsAsync(),
    MultiSelectDirective,
    MultiSelectDirective,
  ],
};
