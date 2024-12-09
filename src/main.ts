import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { AppComponent } from '../src/app/app.component';
import { routes } from '../src/app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Provide your routes
    provideHttpClient(), // Provide HttpClient globally
    importProvidersFrom(ReactiveFormsModule), // Import Forms support
  ],
}).catch((err) => console.error(err));
