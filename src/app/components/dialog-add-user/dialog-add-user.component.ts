import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../../models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule
  ],
  providers: [
    provideNativeDateAdapter() 
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
  user: User = new User();
  firestore = inject(Firestore)
  loading = false;

  constructor(private dialogRef: MatDialogRef<DialogAddUserComponent>) {}
 
  saveUser() {
    this.loading = true;
    const usersRef = collection(this.firestore, 'users');

    addDoc(usersRef, this.user.toJSON())
      .then(() => {
        console.log('User added');
        setTimeout(() => {
          this.dialogRef.close();
        }, 1500); 
      })
      .catch(err => {
        console.error('Error adding user:', err);
        this.loading = false;
      });
  }
  
}
