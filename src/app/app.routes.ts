import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { AppointementsComponent } from './appointements/appointements.component';

export const routes: Routes = [
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent },
  { path: 'appointments', component: AppointementsComponent }
];
