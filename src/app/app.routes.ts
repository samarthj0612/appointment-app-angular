import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { AppointementsComponent } from './appointements/appointements.component';

export const routes: Routes = [
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.routes').then(m => m.CALENDAR_ROUTES),
    // component: CalendarComponent
},
  {
    path: 'appointments',
    loadChildren: () => import('./appointements/appointements.routes').then(m => m.APPOINTMENT_ROUTES),
    // component: AppointementsComponent
  }
];
