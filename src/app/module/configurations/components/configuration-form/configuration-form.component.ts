import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-configurations-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Add required imports here
  templateUrl: './configuration-form.component.html',
  styleUrls: ['./configuration-form.component.css'],
})
export class ConfigurationFormComponent {
  configurationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.configurationForm = this.fb.group({
      totalNumberOfTickets: [null, [Validators.required, Validators.min(0)]],
      ticketReleaseRate: [null, [Validators.required, Validators.min(0)]],
      customerRetrievalRate: [null, [Validators.required, Validators.min(0)]],
      maximumTicketCapacity: [null, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit(): void {
    if (this.configurationForm.valid) {
      console.log('Configuration Data:', this.configurationForm.value);
    } else {
      console.error('Form is invalid');
    }
  }
}
