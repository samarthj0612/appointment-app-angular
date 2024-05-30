import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { Appointment } from '../../../appointment.model'; // Import the Appointment interface or type
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [ CommonModule, DragDropModule, FormsModule ],
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  appointments: Appointment[] = [];
  @Output() editAppointment = new EventEmitter<{appointment: Appointment, index: number}>();

  constructor(private appointmentService: AppointmentService) {
  }

  ngOnInit(): void {
    // this.appointmentService.getAppointments().subscribe((appointments: Appointment[]) => {
    //   this.appointments = appointments;
    // });
    this.appointments = this.appointmentService.getAppointments();
  }

  deleteAppointment(index: number): void {
    this.appointmentService.deleteAppointment(index);
  }

  onEditAppointment(appointment: Appointment, index: number): void {
    this.editAppointment.emit({ appointment, index });
  }

  drop(event: CdkDragDrop<string[]>): void {
    alert(event.currentIndex);
    this.appointmentService.moveAppointment(event.previousIndex, event.currentIndex);
  }
}

