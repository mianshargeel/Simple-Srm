import { Routes } from '@angular/router';
import path from 'node:path';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [

  { path: '', component: DashboardComponent },
  { path: 'user', component: UserComponent}

];
