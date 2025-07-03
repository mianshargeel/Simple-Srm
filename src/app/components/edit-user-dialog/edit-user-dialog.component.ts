import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user.class';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-user-dialog',
  standalone: true,
  imports: [MatDialogModule, FormsModule, MatFormFieldModule, MatInputModule, MatProgressBarModule, MatButtonModule],
  templateUrl: './edit-user-dialog.component.html',
  styleUrl: './edit-user-dialog.component.scss'
})
export class EditUserDialogComponent {
  loading = false;
  user: User = new User();
  userService = inject(UserService);
  userId?: string;

  constructor(public dialogRef: MatDialogRef<EditUserDialogComponent>) { }
  
  async updateUserCredentials() {
    this.loading = true;
    try {
      await this.userService.updateUser(this.userId!, {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email
      });
      
      this.dialogRef.close(true);
    } catch (error) {
      console.error('Error updating user:', error);
    } finally {
      this.loading = false;
    }
  }
}
