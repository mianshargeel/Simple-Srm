import { Routes } from '@angular/router';
import path from 'node:path';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [

  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserDetailsComponent}

];
