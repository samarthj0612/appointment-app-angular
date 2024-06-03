import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { CommonModule } from '@angular/common';
import { Appointment } from '../../appointment.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AppointmentFormComponent, AppointmentListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-calendar-app';
  
}
