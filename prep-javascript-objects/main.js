const person = {
  firstName: 'Joshua',
  lastName: ' Tenny',
  hobby: 'jujitsu'
};
console.log(person);

const fullName = person.firstName + person.lastName;
console.log(fullName);

person.job = 'web developer';
console.log(person.job);

person['previousJob'] = 'delivery';
console.log(person.previousJob);
console.log(person);
