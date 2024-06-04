// import { Component, OnInit } from '@angular/core';
// import { AppointmentService } from '../appointment.service';
// import { Appointment } from '../../../appointment.model'; // Make sure the import path is correct
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
// import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-calendar',
//   standalone: true,
//   templateUrl: './calendar.component.html',
//   imports: [CommonModule, FormsModule],
//   styleUrls: ['./calendar.component.scss']
// })
// export class CalendarComponent implements OnInit {
//   days: Date[] = [];
//   appointments$: Observable<Appointment[]>;

//   constructor(private appointmentService: AppointmentService) {
//     this.appointments$ = this.appointmentService.appointments$;
//   }

//   ngOnInit(): void {
//     const today = new Date();
//     this.days = this.getMonthDays(today.getFullYear(), today.getMonth());
//     this.appointments$ = this.appointmentService.getAppointments();
//   }

//   getMonthDays(year: number, month: number): Date[] {
//     const date = new Date(year, month, 1);
//     const days: Date[] = [];
//     while (date.getMonth() === month) {
//       days.push(new Date(date));
//       date.setDate(date.getDate() + 1);
//     }
//     return days;
//   }

//   getAppointmentsForDay(date: Date): Observable<Appointment[]> {
//     return this.appointments$.pipe(
//       map(appointments => appointments.filter(appointment => {
//         const appointmentDate = new Date(appointment.date);
//         return appointmentDate.getDate() === date.getDate() &&
//                appointmentDate.getMonth() === date.getMonth() &&
//                appointmentDate.getFullYear() === date.getFullYear();
//       }))
//     );
//   }

//   deleteAppointment(index: number): void {
//     this.appointmentService.deleteAppointment(index);
//   }

//   drop(event: CdkDragDrop<any[]>): void {
//     if (event.previousContainer === event.container) {
//       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
//       this.appointmentService.moveAppointment(event.previousIndex, event.currentIndex);
//     }
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { AppointmentService } from '../appointment.service';
// import { Appointment } from '../../../appointment.model';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
// import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-calendar',
//   standalone: true,
//   templateUrl: './calendar.component.html',
//   imports: [CommonModule, FormsModule],
//   styleUrls: ['./calendar.component.scss']
// })
// export class CalendarComponent implements OnInit {
//   days: Date[] = [];
//   appointments$!: Observable<Appointment[]>; // Add '!' to denote it will be initialized in ngOnInit
//   selectedMonth: number;
//   months: { name: string; value: number; }[] = [
//     { name: 'January', value: 0 },
//     { name: 'February', value: 1 },
//     { name: 'March', value: 2 },
//     { name: 'April', value: 3 },
//     { name: 'May', value: 4 },
//     { name: 'June', value: 5 },
//     { name: 'July', value: 6 },
//     { name: 'August', value: 7 },
//     { name: 'September', value: 8 },
//     { name: 'October', value: 9 },
//     { name: 'November', value: 10 },
//     { name: 'December', value: 11 }
//   ];

//   constructor(private appointmentService: AppointmentService) {
//     const today = new Date();
//     this.selectedMonth = today.getMonth();
//   }

//   ngOnInit(): void {
//     this.updateCalendar();
//     this.appointments$ = this.appointmentService.getAppointments();
//   }

//   updateCalendar(): void {
//     const today = new Date();
//     this.days = this.getMonthDays(today.getFullYear(), this.selectedMonth);
//   }

//   getMonthDays(year: number, month: number): Date[] {
//     const date = new Date(year, month, 1);
//     const days: Date[] = [];
//     while (date.getMonth() === month) {
//       days.push(new Date(date));
//       date.setDate(date.getDate() + 1);
//     }
//     return days;
//   }

//   getAppointmentsForDay(date: Date): Observable<Appointment[]> {
//     return this.appointments$.pipe(
//       map(appointments => appointments.filter(appointment => {
//         const appointmentDate = new Date(appointment.date);
//         return appointmentDate.getDate() === date.getDate() &&
//                appointmentDate.getMonth() === date.getMonth() &&
//                appointmentDate.getFullYear() === date.getFullYear();
//       }))
//     );
//   }

//   deleteAppointment(index: number): void {
//     this.appointmentService.deleteAppointment(index);
//   }

//   drop(event: CdkDragDrop<any[]>): void {
//     if (event.previousContainer === event.container) {
//       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
//       this.appointmentService.moveAppointment(event.previousIndex, event.currentIndex);
//     }
//   }

//   onMonthChange(): void {
//     this.updateCalendar();
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { AppointmentService } from '../appointment.service';
// import { Appointment } from '../../../appointment.model';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
// import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-calendar',
//   standalone: true,
//   templateUrl: './calendar.component.html',
//   imports: [CommonModule, FormsModule],
//   styleUrls: ['./calendar.component.scss']
// })
// export class CalendarComponent implements OnInit {
//   days: Date[] = [];
//   appointments$!: Observable<Appointment[]>; 
//   selectedMonth: number = new Date().getMonth(); // Initialize selectedMonth with current month
//   months: { name: string; value: number; }[] = [
//     { name: 'January', value: 0 },
//     { name: 'February', value: 1 },
//     { name: 'March', value: 2 },
//     { name: 'April', value: 3 },
//     { name: 'May', value: 4 },
//     { name: 'June', value: 5 },
//     { name: 'July', value: 6 },
//     { name: 'August', value: 7 },
//     { name: 'September', value: 8 },
//     { name: 'October', value: 9 },
//     { name: 'November', value: 10 },
//     { name: 'December', value: 11 }
//   ];

//   constructor(private appointmentService: AppointmentService) {}

//   ngOnInit(): void {
//     this.updateCalendar();
//     this.appointments$ = this.appointmentService.getAppointments();
//   }

//   updateCalendar(): void {
//     this.days = this.getMonthDays(new Date().getFullYear(), this.selectedMonth);
//   }

//   getMonthDays(year: number, month: number): Date[] {
//     const date = new Date(year, month, 1);
//     const days: Date[] = [];
//     while (date.getMonth() === month) {
//       days.push(new Date(date));
//       date.setDate(date.getDate() + 1);
//     }
//     return days;
//   }

//   getAppointmentsForDay(date: Date): Observable<Appointment[]> {
//     return this.appointments$.pipe(
//       map(appointments => appointments.filter(appointment => {
//         const appointmentDate = new Date(appointment.date);
//         return appointmentDate.getDate() === date.getDate() &&
//                appointmentDate.getMonth() === date.getMonth() &&
//                appointmentDate.getFullYear() === date.getFullYear();
//       }))
//     );
//   }

//   deleteAppointment(index: number): void {
//     this.appointmentService.deleteAppointment(index);
//   }

//   drop(event: CdkDragDrop<any[]>): void {
//     if (event.previousContainer === event.container) {
//       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
//       this.appointmentService.moveAppointment(event.previousIndex, event.currentIndex);
//     }
//   }

//   onMonthChange(event: Event): void {
//     const target = event.target as HTMLSelectElement;
//     this.selectedMonth = parseInt(target.value);
//     this.updateCalendar();
//   }
// }



import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../../../appointment.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  days: Date[] = [];
  appointments$!: Observable<Appointment[]>; 
  selectedMonth: number = new Date().getMonth(); // Initialize selectedMonth with current month
  selectedYear: number = new Date().getFullYear(); // Initialize selectedYear with current year
  months: { name: string; value: number; }[] = [
    { name: 'January', value: 0 },
    { name: 'February', value: 1 },
    { name: 'March', value: 2 },
    { name: 'April', value: 3 },
    { name: 'May', value: 4 },
    { name: 'June', value: 5 },
    { name: 'July', value: 6 },
    { name: 'August', value: 7 },
    { name: 'September', value: 8 },
    { name: 'October', value: 9 },
    { name: 'November', value: 10 },
    { name: 'December', value: 11 }
  ];

  years: number[] = Array.from({length: 10}, (_, i) => new Date().getFullYear() + i);


  constructor(private appointmentService: AppointmentService) {
    console.log("from calendar");
  }

  ngOnInit(): void {
    this.updateCalendar();
    this.appointments$ = this.appointmentService.getAppointments();
  }

  updateCalendar(): void {
    this.days = this.getMonthDays(this.selectedYear, this.selectedMonth);
  }

  getMonthDays(year: number, month: number): Date[] {
    const firstDayOfMonth = new Date(year, month, 1);
    const startingDay = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, etc.
    const days: Date[] = [];
    
    // Calculate the offset to align the first day with Sunday
    let offset = startingDay === 0 ? 0 : 7 - startingDay;
    
    // Add the days of the previous month (if necessary)
    for (let i = 0; i < offset; i++) {
      const prevMonthDay = new Date(year, month, 1 - offset + i);
      days.push(prevMonthDay);
    }
  
    // Add the days of the current month
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= lastDayOfMonth; i++) {
      const currentMonthDay = new Date(year, month, i);
      days.push(currentMonthDay);
    }
  
    // Add the days of the next month (if necessary) to complete the last week
    const remainingDays = 7 - (days.length % 7);
    if (remainingDays !== 0 && remainingDays !== 7) {
      for (let i = 1; i <= remainingDays; i++) {
        const nextMonthDay = new Date(year, month + 1, i);
        days.push(nextMonthDay);
      }
    }
  
    return days;
  }
  
  getAppointmentsForDay(date: Date): Observable<Appointment[]> {
    return this.appointments$.pipe(
      map(appointments => appointments.filter(appointment => {
        const appointmentDate = new Date(appointment.date);
        return appointmentDate.getDate() === date.getDate() &&
               appointmentDate.getMonth() === date.getMonth() &&
               appointmentDate.getFullYear() === date.getFullYear();
      }))
    );
  }

  deleteAppointment(index: number): void {
    this.appointmentService.deleteAppointment(index);
  }

  drop(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.appointmentService.moveAppointment(event.previousIndex, event.currentIndex);
    }
  }

  onMonthChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedMonth = parseInt(target.value);
    this.updateCalendar();
  }

  onYearChange(): void {
    this.updateCalendar();
  }
}
