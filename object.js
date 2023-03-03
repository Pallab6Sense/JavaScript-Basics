const person = {
  firstName: 'john',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 main st',
    city: 'Boston',
    state: 'MA',
    spouse: {
      hasSpouse: true,
    },
  },
};

const {
  firstName,
  lastName,
  address: { city },
} = person; //Destructuring the person object

console.log(firstName, lastName, city);

console.log(person.firstName);
console.log(person.hobbies[2]);
console.log(person.address.city);
console.log(person.address.spouse.hasSpouse);
