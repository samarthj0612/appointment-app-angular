// import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
// import { AppointmentService } from '../appointment.service';
// import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
// import { Appointment } from '../../../appointment.model';

// @Component({
//   selector: 'app-appointment-form',
//   standalone: true,
//   imports: [ FormsModule ],
//   templateUrl: './appointment-form.component.html',
//   styleUrls: ['./appointment-form.component.scss']
// })
// export class AppointmentFormComponent implements OnChanges {
//   @Input() appointmentToEdit: Appointment | null = null;
//   @Input() editIndex: number | null = null;
//   @Output() clearEdit = new EventEmitter<void>();

//   appointmentForm: FormGroup;

//   title: string = '';
//   date: string = '';

//   constructor(private fb: FormBuilder, private appointmentService: AppointmentService) {
//     // this.title = "Medical";
//     // this.date = "2024-06-06T16:52";

//     this.appointmentForm = this.fb.group({
//       title: ['', Validators.required],
//       date: ['', Validators.required],
//       time: ['', Validators.required]
//     });
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     if (changes['appointmentToEdit'] && this.appointmentToEdit) {
//       this.title = this.appointmentToEdit.title;
//       this.date = this.appointmentToEdit.date.toISOString().substring(0, 16);
//     }
//   }

//   addOrUpdateAppointment(): void {
//     if (this.title && this.date) {
//       const appointment: Appointment = {
//         title: this.title,
//         date: new Date(this.date),
//         startTime: this.date.substring(11),
//         endTime: ''
//       };

//       if (this.editIndex !== null) {
//         this.appointmentService.updateAppointment(this.editIndex, appointment);
//         this.clearEdit.emit();
//       } else {
//         this.appointmentService.addAppointment(appointment);
//       }

//       this.clearForm();
//     } else {
//       console.error('Title and date are required to add an appointment');
//     }
//   }

//   clearForm(): void {
//     // this.title = '';
//     // this.date = '';
//     // this.editIndex = null;
//   }

//   // addAppointment(): void {
//   //   // Check if the title and date are provided
//   //   if (this.title && this.date) {
//   //     // Add the appointment if both title and date are provided
//   //     console.log(this.date);
//   //     this.appointmentService.addAppointment({
//   //       title: this.title,
//   //       date: new Date(this.date),
//   //       startTime: '',
//   //       endTime: ''
//   //     });
      
//   //     // Clear the form fields after adding the appointment
//   //     // this.title = '';
//   //     // this.date = '';
//   //   } else {
//   //     // Handle error condition (e.g., show a message to the user)
//   //     console.error('Title and date are required to add an appointment');
//   //   }
//   // }
// }


import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../../../appointment.model';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnChanges {
  @Input() appointmentToEdit: Appointment | null = null;
  @Input() editIndex: number | null = null;
  @Output() clearEdit = new EventEmitter<void>();

  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder, private appointmentService: AppointmentService) {
    this.appointmentForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appointmentToEdit'] && this.appointmentToEdit) {
      this.appointmentForm.patchValue({
        title: this.appointmentToEdit.title,
        date: this.appointmentToEdit.date.toISOString().substring(0, 10), // Format as 'YYYY-MM-DD'
        time: this.appointmentToEdit.date.toISOString().substring(11, 16) // Format as 'HH:MM'
      });
    }
  }

  addOrUpdateAppointment(): void {
    if (this.appointmentForm.valid) {
      const formValues = this.appointmentForm.value;
      const appointment: Appointment = {
        title: formValues.title,
        date: new Date(`${formValues.date}T${formValues.time}:00`),
        startTime: formValues.time,
        endTime: '' // Adjust as needed
      };

      if (this.editIndex !== null) {
        this.appointmentService.updateAppointment(this.editIndex, appointment);
        this.clearEdit.emit();
      } else {
        this.appointmentService.addAppointment(appointment);
      }

      this.clearForm();
    } else {
      console.error('Title, date, and time are required to add an appointment');
    }
  }

  clearForm(): void {
    this.appointmentForm.reset();
    this.clearEdit.emit();
  }
}
