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
  selector: 'app-edit-address-dialog',
  standalone: true,
  imports: [MatDialogModule, FormsModule, MatFormFieldModule, MatInputModule, MatProgressBarModule, MatButtonModule],
  templateUrl: './edit-address-dialog.component.html',
  styleUrl: './edit-address-dialog.component.scss'
})
export class EditAddressDialogComponent {
  loading = false;
  user!: User;
  userService = inject(UserService);
  userId?: string;

  constructor(public dialogRef: MatDialogRef<EditAddressDialogComponent>) { }
  
  async updateAddress() {
    this.loading = true;
    try {
      await this.userService.updateUser(this.userId!, {
        street: this.user.street,
        zipCode: this.user.zipCode,
        city: this.user.city
      });
      
      this.dialogRef.close(true);
    } catch (error) {
      console.error('Error updating user:', error);
    } finally {
      this.loading = false;
    }
  }

}
