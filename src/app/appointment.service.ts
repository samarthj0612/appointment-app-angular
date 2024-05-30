import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Appointment } from '../../appointment.model'; // Import the Appointment interface or type

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: BehaviorSubject<Appointment[]> = new BehaviorSubject<Appointment[]>([]);

  data: any;

  constructor() {
    this.data = <any>[];
  }

  getAppointments() {
    // return this.appointments.asObservable();
    return this.data;
  }

  addAppointment(appointment: Appointment) {

    this.data.push(appointment);

    console.log(this.data);

    // const currentAppointments = this.appointments.getValue();
    // this.appointments.next([...currentAppointments, appointment]);
    // console.log(this.appointments);
  }

  deleteAppointment(index: number) {
    // const currentAppointments = this.appointments.getValue();
    // currentAppointments.splice(index, 1);
    // this.appointments.next(currentAppointments);

    this.data.splice(index, 1);

  }

  moveAppointment(oldIndex: number, newIndex: number) {
    // const currentAppointments = this.appointments.getValue();
    // const appointmentToMove = currentAppointments[oldIndex];
    // currentAppointments.splice(oldIndex, 1);
    // currentAppointments.splice(newIndex, 0, appointmentToMove);
    // this.appointments.next(currentAppointments);

    const currentAppointments = this.data;
    const appointmentToMove = currentAppointments[oldIndex];
    currentAppointments.splice(oldIndex, 1);
    currentAppointments.splice(newIndex, 0, appointmentToMove);
    this.data = currentAppointments;
  }

  updateAppointment(index: number, updatedAppointment: Appointment) {
    this.data[index] = updatedAppointment;
  }
}
