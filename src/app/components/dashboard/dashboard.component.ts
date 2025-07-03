import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../../models/user.class';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
})
export class DashboardComponent {
  userService = inject(UserService);
  totalUsers = 0;

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.totalUsers = users.length;
    });
  }
}
