import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  firestore = inject(Firestore);

  constructor() { }

  getUsers(): Observable<User[]> {
    const usersRef = collection(this.firestore, 'users');
    return collectionData(usersRef, { idField: 'id' }) as Observable<User[]>;
  }

}
