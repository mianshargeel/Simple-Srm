import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { User } from '../../../models/user.class';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  userId!: string;
  user!: User;

  private route = inject(ActivatedRoute);
  private firestore = inject(Firestore);

  /**
 * Extracts the `id` parameter from the current route URL.
 *
 * This line retrieves the user ID passed in the route using Angular's `ActivatedRoute`.
 * 
 * Example: If the route is defined as `/user/:id` and the URL is `/user/abc123`,
 * this function extracts `abc123` as the user ID.
 * 
 * - `this.route.snapshot` captures the route state at the moment this component is initialized.
 * - `.paramMap.get('id')` fetches the value of the `id` parameter from the route.
 * - The exclamation mark (`!`) is a non-null assertion to tell TypeScript we are sure `id` exists.
 *
 * This ID is later used to fetch the corresponding user document from Firestore.
 */
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id')!;//when i click on any user, Angular automatically extracts id of that user as the id parameter. 
    const userDoc = doc(this.firestore, `users/${this.userId}`);
    docData(userDoc, { idField: 'id' }).subscribe((userData) => {
      this.user = userData as User;
    });
  }

}
