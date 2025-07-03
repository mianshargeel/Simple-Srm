import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RouterModule } from '@angular/router'; 
import { User } from '../../../models/user.class';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [RouterModule, FormsModule]
})
export class DashboardComponent {
  userService = inject(UserService);
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';
  totalUsers = 0;

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.totalUsers = users.length;
      this.filterUsers(); // initial render
    });
  }

  filterUsers() {
    const term = this.searchTerm.toLowerCase().trim();
  
    if (!term) {
      this.filteredUsers = []; 
      return;
    }
  
    this.filteredUsers = this.users.filter(user =>
      user.firstName.toLowerCase().includes(term) ||
      user.lastName.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term)
    );
  }
  
}
