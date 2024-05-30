import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { CommonModule } from '@angular/common';
import { Appointment } from '../../appointment.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppointmentFormComponent, AppointmentListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-calendar-app';
  appointmentToEdit: { appointment: Appointment, index: number } | null = null;

  onEditAppointment(event: { appointment: Appointment, index: number }): void {
    this.appointmentToEdit = event;
  }

  clearEdit(): void {
    this.appointmentToEdit = null;
  }
}
