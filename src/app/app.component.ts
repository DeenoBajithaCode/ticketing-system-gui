import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet, RouterLink} from '@angular/router';
import {
  ConfigurationFormComponent
} from './module/configurations/components/configuration-form/configuration-form.component';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ConfigurationFormComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ticketing-system-gui';
  showForm: boolean = false;

  constructor(private http: HttpClient) {
  }

  startExecution() {
    this.http.post('/api/execution', true).subscribe(
      () => console.log('Execution started successfully'),
      (error) => console.error('Error starting execution', error)
    );
  }

  stopExecution() {
    this.http.post('/api/execution', false).subscribe(
      () => console.log('Execution stopped successfully'),
      (error) => console.error('Error stopping execution', error)
    );
  }
}
