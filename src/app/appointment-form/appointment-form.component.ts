import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../../../appointment.model';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnChanges {
  @Input() appointmentToEdit: Appointment | null = null;
  @Input() editIndex: number | null = null;
  @Output() clearEdit = new EventEmitter<void>();

  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder, private appointmentService: AppointmentService) {
    this.appointmentForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appointmentToEdit'] && this.appointmentToEdit) {
      this.appointmentForm.patchValue({
        title: this.appointmentToEdit.title,
        date: this.appointmentToEdit.date.toISOString().substring(0, 10), // Format as 'YYYY-MM-DD'
        time: this.appointmentToEdit.date.toISOString().substring(11, 16) // Format as 'HH:MM'
      });
    }
  }

  addOrUpdateAppointment(): void {
    if (this.appointmentForm.valid) {
      const formValues = this.appointmentForm.value;
      const appointment: Appointment = {
        title: formValues.title,
        date: new Date(`${formValues.date}T${formValues.time}:00`),
        startTime: formValues.time,
        endTime: '' // Adjust as needed
      };

      if (this.editIndex !== null) {
        this.appointmentService.updateAppointment(this.editIndex, appointment);
        this.clearEdit.emit();
      } else {
        this.appointmentService.addAppointment(appointment);
      }

      this.clearForm();
    } else {
      console.error('Title, date, and time are required to add an appointment');
    }
  }

  clearForm(): void {
    this.appointmentForm.reset();
    this.clearEdit.emit();
  }
}
