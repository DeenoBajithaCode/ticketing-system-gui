import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationService } from '../../service/configuration-service/configuration-service.service';
import { Configuration } from '../../model/configuration';

@Component({
  selector: 'app-configurations-page',
  standalone: true,
  templateUrl: './configuration-form.component.html',
  styleUrls: ['./configuration-form.component.css'],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule], // Ensure CommonModule and ReactiveFormsModule are included here
  providers: [ConfigurationService],
})
export class ConfigurationFormComponent {
  configurationForm: FormGroup;
  notificationMessage: string | null = null;
  notificationType: string = 'success';

  constructor(
    private fb: FormBuilder,
    private configService: ConfigurationService
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
          this.notificationMessage = response;
          this.notificationType = 'success';
          this.configurationForm.reset();
        },
        (error) => {
          this.notificationMessage = 'Error saving configuration';
          this.notificationType = 'danger';
          console.error('Error:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }

  clearNotification(): void {
    this.notificationMessage = null;
  }
}
