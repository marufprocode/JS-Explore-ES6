const numbers = [45, 4, 9, 16, 25];

let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// console.log(allOver18); // false

const numbers2 = [45, 4, 9, 16, 25];

let allOver20 = numbers2.some(myFunction);

function myFunction(value, index, array) {
  return value > 20;
}

console.log(allOver20); // true
