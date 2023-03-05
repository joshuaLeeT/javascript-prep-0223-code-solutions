
/*  addTwoNumbers  */

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const addTwoNumberResults = addTwoNumbers(2, 2);
console.log('add two numbers function exercise:', addTwoNumberResults);

/*  convertHoursToMinutes  */

function convertHoursToMinutes(hours) {
  return hours * 60;
}
console.log(convertHoursToMinutes(2));

/*  getGreeting  */

function getGreeting(name) {
  return name + 'Hello world!';
}
console.log(getGreeting(name));

/*  addAndMultiplyBy5  */

function addAndMultiplyBy5(num1, num2) {
  return num1 + num2;
}

console.log(addAndMultiplyBy5(10, 5) * 5);

/*  multiplyAndDivideBy5  */

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2;
}

console.log(multiplyAndDivideBy5(35, 10) / 5);

/*  subtractTwoNumbers  */

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

console.log(subtractTwoNumbers(22, 7));

/*  getCircleCircumference  */

function getCircleCircumference(radius) {
  const circumference = 2 * Math.PI * radius;
  return circumference;
}

const circumference = getCircleCircumference(5);
console.log(circumference);

/*   */

function getFullName(firstName, lastName) {
  return firstName + lastName;
}

console.log(getFullName('josh', ' Tenny'));

/*   */

function cube(number) {

  const result = Math.pow(number, 3);

  return result;
}

console.log(cube(5));
