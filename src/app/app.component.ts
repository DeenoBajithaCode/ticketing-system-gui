import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet, RouterLink} from '@angular/router';
import {
  ConfigurationFormComponent
} from './component/configuration-form/configuration-form.component';
import {HttpClient} from '@angular/common/http';
import {NavbarComponent} from './component/nav-bar/nav-bar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ConfigurationFormComponent, NavbarComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

}
