import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Appointment } from '../../appointment.model'; // Import the Appointment interface or type

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: BehaviorSubject<Appointment[]> = new BehaviorSubject<Appointment[]>([]);

  get appointments$(): Observable<Appointment[]> {
    return this.appointments.asObservable();
  }

  getAppointments(): Observable<Appointment[]> {
    return this.appointments$;
  }

  addAppointment(appointment: Appointment): void {
    const currentAppointments = this.appointments.getValue();
    this.appointments.next([...currentAppointments, appointment]);
  }

  deleteAppointment(index: number): void {
    const currentAppointments = this.appointments.getValue();
    currentAppointments.splice(index, 1);
    this.appointments.next(currentAppointments);
  }

  moveAppointment(oldIndex: number, newIndex: number): void {
    const currentAppointments = this.appointments.getValue();
    const appointmentToMove = currentAppointments[oldIndex];
    currentAppointments.splice(oldIndex, 1);
    currentAppointments.splice(newIndex, 0, appointmentToMove);
    this.appointments.next(currentAppointments);
  }

  updateAppointment(index: number, updatedAppointment: Appointment): void {
    const currentAppointments = this.appointments.getValue();
    currentAppointments[index] = updatedAppointment;
    this.appointments.next(currentAppointments);
  }
}
