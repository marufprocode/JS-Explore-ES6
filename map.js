// Double it in different ways 

const numbers = [2, 4, 8, 3, 5];

const newNumMap = numbers.map((v, i, a) => console.log(v, i, a))

function doubleTheArray (array) {
    const doubleArray = [];
    for (num of array){
        doubleArray.push(num*2);
    }
    return doubleArray;
}

// console.log(doubleTheArray(numbers));  // [ 4, 8, 16, 6, 10 ]

function doubleTheArray2(array){
    const doubleArray = [];
    for (num of array){
        doubleArray.push(makeDouble(num));
    }
    return doubleArray;
}

const makeDouble = x => x * 2; 
// console.log(doubleTheArray(numbers));  // [ 4, 8, 16, 6, 10 ]


// Let's try using Map
const makeDoubleByMap = numbers.map(makeDouble);
// console.log(makeDoubleByMap);  // [ 4, 8, 16, 6, 10 ]

// using function directly inside map
const makeDoubleByMap2 = numbers.map(x => x * 2);
console.log(makeDoubleByMap2);  // [ 4, 8, 16, 6, 10 ]







