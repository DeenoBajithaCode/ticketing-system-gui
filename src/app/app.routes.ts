import {Routes} from '@angular/router';
import {ConfigurationFormComponent} from './component/configuration-form/configuration-form.component';
import {ExecutionPanelComponent} from './component/execution-panel/execution-panel.component';

export const routes: Routes = [
  { path: 'configuration', component: ConfigurationFormComponent },
  { path: 'execution', component: ExecutionPanelComponent },
];
