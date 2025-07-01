import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../../models/user.class';
import {MatCardModule} from '@angular/material/card';
import { UserService } from '../../services/user.service';
import { RouterModule } from '@angular/router'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatCardModule, RouterModule ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user: User = new User();
  userService = inject(UserService);
  allUser: User[] = []; //will contail all users from firebase
  private userSub!: Subscription;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.userSub = this.userService.getUsers().subscribe(users => { //subscribe() gives us the full array of users
      this.allUser = users;
    });
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe(); //Unsubscribe when component is destroyed
  }
  
  openDialog() {
    this.dialog.open(DialogAddUserComponent); 
    (document.activeElement as HTMLElement)?.blur();
  }

}
