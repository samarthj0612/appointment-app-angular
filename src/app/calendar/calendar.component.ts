import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../../../appointment.model'; // Import the Appointment interface or type

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe((appointments: Appointment[]) => {
      this.appointments = appointments;
    });
  }

  deleteAppointment(index: number): void {
    this.appointmentService.deleteAppointment(index);
  }
}
