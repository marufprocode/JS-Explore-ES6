let numbers = [45, 20, 46, 77, 88];

let numbersN = [...numbers];

console.log(numbersN);  // [ 45, 20, 46, 77, 88 ]

let numbers2 = [2, 3, ...numbers, 4, 5];
console.log(numbers2);  //[2,  3, 45, 20, 46, 77, 88,  4,  5];

let largest = Math.max(...numbers);
console.log(largest); // 88

let smallest = Math.min(...numbers);
console.log(smallest); // 20

let dupArray = [20, 20, 77, 77, 88];
let removeDup = [...new Set(dupArray)];
console.log(removeDup); // [ 20, 77, 88 ]

let nameList1 = ['Abir', 'Abul', 'Kalam'];
let nameList2 = ['Mamun', 'Salam', 'Alam'];
let nameList3 = [...nameList1, ...nameList2];
console.log(nameList3); // [ 'Abir', 'Abul', 'Kalam', 'Mamun', 'Salam', 'Alam' ]

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

console.log(myUpdatedVehicle);   //
                                /* {
                                    brand: 'Ford',
                                    model: 'Mustang',
                                    color: 'yellow',
                                    type: 'car',
                                    year: 2021
                                } */