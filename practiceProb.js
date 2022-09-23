/* Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result. */

const defaultPara = (firstName, lastName = 'chowdhury') => {
    const fullName = `${firstName} ${lastName}`
    return fullName;
}

// console.log(defaultPara('kamal', 'hasan'));
// console.log(defaultPara('kamal'));


// =======-------=========---------===========-------------==============

/* Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result */

const getEvenLength = array => {
    let friendArray = [];
    for (friend of array){
        if ((friend.length % 2) === 0){
            friendArray.push(friend);
        }
    }
    return friendArray;
}

const friends = ['Habib', 'Rabbi', 'Abir', 'Abdullah', 'Emon', 'Alif'];
// console.log(getEvenLength(friends)); // result: [ 'Abir', 'Abdullah', 'Emon', 'Alif' ]

// =======-------=========---------===========-------------==============

/* Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements */

const getAverageOfSquaredElements = array => {
    let sum = 0;
    for (numbers of array){
        const squaredElement = Math.pow(numbers, 2);
        sum += squaredElement;
    }
    return sum / array.length;
}

let numbers = [5, 4, 8, 9];

// console.log(getAverageOfSquaredElements(numbers));

// =======-------=========---------===========-------------==============

/* rite an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result */

const getMaxFromArrays = (arr1, arr2) => {
    const newArray = [...arr1, ...arr2];
    const maxOfNewArray = Math.max(...newArray);
    return maxOfNewArray;
}

const num1 = [10, 12, 90, 88, 99];
const num2 = [20, 120, 110, 105, 140, 140];
console.log(getMaxFromArrays(num1, num2));



