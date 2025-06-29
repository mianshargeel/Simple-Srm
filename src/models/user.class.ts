export class User {
  firstName: string;
  lastName: string;
  birthDay: Date | string | null;
  street: string;
  zipCode: string;
  city: string;
  
  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.lastName =  obj ? obj.lastName : '';
    this.birthDay =  obj ? obj.birthDay : '';
    this.street =  obj ? obj.street : '';
    this.zipCode =  obj ? obj.zipCode : '';
    this.city =  obj ? obj.city : '';
  }

  public toJSON() { // converting to JSON
      return {
        firstName: this.firstName,
        lastName: this.lastName ,
        birthDay:  this.birthDay,
        street:  this.street,
        zipCode: this.zipCode,
        city: this.city
    }
  }
}
