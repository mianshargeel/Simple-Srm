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
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.email = obj ? obj.email : '';
    this.birthDay =  obj ? obj.birthDay : '';
    this.street =  obj ? obj.street : '';
    this.zipCode =  obj ? obj.zipCode : '';
    this.city = obj ? obj.city : '';
    this.id = obj?.id; 
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
  public toJSON() { // converting to JSON
    const { id, ...data } = this; 
    return { //excluding id 
        ...data,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        birthDay:  this.birthDay,
        street:  this.street,
        zipCode: this.zipCode,
        city: this.city,
    }
  }
}
