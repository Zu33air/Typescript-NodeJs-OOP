import { Person } from "./person.js";
// here we can either read or write data to this class
export class Student extends Person {
    // Private Field (backing field) hold any data that assigned
    _name;
    student() {
        this._name = "";
    }
    // the name property
    get() {
        return this._name;
    }
    set(value) {
        return (this._name = value);
    }
}
