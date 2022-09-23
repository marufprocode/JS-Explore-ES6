// Object Destructuring
const user = {
    id : 339,
    name : 'sakib',
    age : 35
}

const {name, ...others} = user; 
// console.log(name); // sakib
console.log(name, others); //sakib { id: 339, age: 35 }


const {name : student} = user;
// console.log(student);


// Array Destructuring
const names = ['sakib', 'forid', 'rabbi'];

// const [first, second, third] = names;
// console.log(second);  // forid

const [first, , third] = names;
// console.log(first, third);  // sakib rabbi


function getNames () {
    return ['alim', 'halim'];
}

const [baba, chacha] = getNames();
// console.log(baba);  // alim


// Nested object Destructuring:
const user2 = {
    id : 339,
    name : 'sakib',
    age : 35,
    education : {
        degree : 'BBA'
    }
}

/* const {degree} = user2.education;
console.log(degree); */

/* const {education:{degree : x}} = user2;
console.log(x); */  // BBA

const num = [10, 15, 13, [68, 78], 90];

// suppose we need to assign var for nested array's 2nd value;

const [,,,[, specialNum]] = num;
// console.log(specialNum);  // 78
 

// swap variable using destructuring
let a = 10;
let b = 20;

// Old method:
/* let temp = a;
a = b;
b = temp;
console.log(a, b); */ // 20 10

// using destructuring method:
[b, a] = [a, b];
console.log(a, b);  // 20 10









