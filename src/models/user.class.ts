import { Timestamp } from '@angular/fire/firestore';

export class User {
  id?: string; //
  firstName: string;
  lastName: string;
  email: string;
  birthDay: Date | string | null;
  street: string;
  zipCode: string;
  city: string;
  
  constructor(obj?: any) {
    this.firstName = obj?.firstName || '';
    this.lastName = obj?.lastName || '';
    this.email = obj?.email || '';
    this.street = obj?.street || '';
    this.zipCode = obj?.zipCode || '';
    this.city = obj?.city || '';
    this.id = obj?.id;

    const birth = obj?.birthDay;
    if (birth instanceof Timestamp) {
      this.birthDay = birth.toDate();
    } else if (birth instanceof Date) {
      this.birthDay = birth;
    } else if (typeof birth === 'string') {
      this.birthDay = new Date(birth);
    } else {
      this.birthDay = null;
    }
  }

  /**
 * Converts the User instance to a plain object for saving to Firestore.
 *
 * This method removes the `id` property, since Firestore does not accept
 * `undefined` values and the document ID is managed separately by Firestore.
 * It also ensures that all returned fields are safe to store by providing
 * default values for missing or optional properties.
 *
 * @returns An object containing user data excluding the `id` field.
 */
  public toJSON() {
    const { id, ...rest } = this;
  
    return {
      ...rest,
      birthDay:
        this.birthDay instanceof Date
          ? Timestamp.fromDate(this.birthDay)
          : this.birthDay || null, // handles empty strings or null
    };
  }
}
