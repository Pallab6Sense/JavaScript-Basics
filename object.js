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

console.log(person.firstName);
console.log(person.hobbies[2]);
console.log(person.address.city);
console.log(person.address.spouse.hasSpouse);