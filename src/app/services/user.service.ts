import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData,  doc, updateDoc, } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../../models/user.class';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  firestore = inject(Firestore);

  constructor() { }

  getUsers(): Observable<User[]> {
    const usersRef = collection(this.firestore, 'users');
    return collectionData(usersRef, { idField: 'id' }).pipe(
      map(users => users.map(user => new User(user))) 
    );
  }

  updateUser(userId: string, userData: Partial<User>): Promise<void> {
    const userDocRef = doc(this.firestore, `users/${userId}`);
    return updateDoc(userDocRef, userData);
  }
  

}
