// Assign attributes for the student object 
// (same attributes as the student object in the backend)
export class Student {
    id!: number;       // ! means that the variable is guaranteed to be assigned a value
    firstName: string = "";     // Name is empty as default
    lastName: string = "";

    // Constructor to make a new student
    constructor(firstName:string, lastName:string) {
        this.id = 0;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
