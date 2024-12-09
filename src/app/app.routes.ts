import { Routes } from '@angular/router';
import { ConfigurationFormComponent } from './module/configurations/components/configuration-form/configuration-form.component';
import {AppComponent} from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'configuration', component: ConfigurationFormComponent },
];
