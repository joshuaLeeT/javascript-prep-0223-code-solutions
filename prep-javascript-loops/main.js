// create your loops here.

function whileLoop1() {
  const array1 = [];
  let i = 0;

  while (i < 10) {
    array1.push(i);
    i++;
  }

  return array1;
}
console.log('whileLoop1 output:', whileLoop1());

/*      */

function whileLoop2() {
  const array2 = [];
  let j = 0;
  while (j <= 18) {
    console.log(array2.push(j));
    j = j + 3;
  }
  return array2;
}
console.log('whileLoop2 output:', whileLoop2());

/*  */

const arr3 = [];

function forLoop1() {
  for (let k = 0; k < 10; k++) {
    console.log(arr3.push(k));
  }
  return arr3;
}
console.log('forLoop1 output:', forLoop1());

function forLoop2() {
  for (let l = 100; l >= 0; l--) {
    console.log('time till explosion!' + l);
  }
}

forLoop2();

/*  forInLoop1 */

function forInLoop1(obj) {
  const person = [];
  for (const key in obj) {
    person.push(obj[key]);
  }
  return person;
}

const person1 = {
  name: 'Billy',
  age: 25,
  hobby: 'jujitsu',
  invention: 'armbar'
};

const array3 = forInLoop1(person1);
console.log(array3);

function forInLoop2(object) {
  const subject = [];
  for (const type in object) {
    subject.push(object[type]);
  }
  return subject;

}
const songs = {
  0: 'ada LoveLace',
  1: 'classic',
  2: 'computation',
  3: ' analytical engine'

};

const array4 = forInLoop2(songs);
console.log(array4);
