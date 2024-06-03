import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppointmentFormComponent } from '../appointment-form/appointment-form.component';
import { AppointmentListComponent } from '../appointment-list/appointment-list.component';
import { CommonModule } from '@angular/common';
import { Appointment } from '../../../appointment.model';

@Component({
  selector: 'app-appointements',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AppointmentFormComponent, AppointmentListComponent, CommonModule],
  templateUrl: './appointements.component.html',
  styleUrl: './appointements.component.scss'
})
export class AppointementsComponent {
  appointmentToEdit: { appointment: Appointment, index: number } | null = null;

  onEditAppointment(event: { appointment: Appointment, index: number }): void {
    this.appointmentToEdit = event;
  }

  clearEdit(): void {
    this.appointmentToEdit = null;
  }
}
