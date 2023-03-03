class Person {
  constructor(firsName, lastName, dob) {
    this.firsName = firsName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firsName} ${this.lastName}`;
  }
}

const person1 = new Person('John', 'Doe', '4-3-1980');
console.log(person1.getFullName());
console.log(person1.getBirthYear());
