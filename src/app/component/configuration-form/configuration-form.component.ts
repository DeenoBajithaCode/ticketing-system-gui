import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {ConfigurationService} from '../../service/configuration-service/configuration-service.service';
import {Configuration} from '../../model/configuration';

@Component({
  selector: 'app-configurations-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './configuration-form.component.html',
  styleUrls: ['./configuration-form.component.css'],
  providers: [ConfigurationService],
})
export class ConfigurationFormComponent {
  configurationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private configService: ConfigurationService // Inject the service
  ) {
    this.configurationForm = this.fb.group({
      totalNumberOfTickets: [null, [Validators.required, Validators.min(0)]],
      ticketReleaseRate: [null, [Validators.required, Validators.min(0)]],
      customerRetrievalRate: [null, [Validators.required, Validators.min(0)]],
      maximumTicketCapacity: [null, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit(): void {
    if (this.configurationForm.valid) {
      const config: Configuration = this.configurationForm.value;
      this.configService.addConfiguration(config).subscribe(
        (response) => {
          console.log('Configuration saved successfully:', response);
        },
        (error) => {
          console.error('Error saving configuration:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
