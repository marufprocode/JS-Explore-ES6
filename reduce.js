const numbers = [1, 2, 3, 4, 5];
// .reduce (accumulatorFunction, initial value)
// accumulatorFunction use two parameters 
// const total = numbers.reduce( (previous, current) => previous + current , 0);
const total = numbers.reduce( (previous, current) => {
    // console.log(previous, current);
    return previous + current
} );
// console.log(total);



const product = {
    name: 'Laptop', 
    model:'Yoga 3',
    price:49000, 
    dusk: '512SSD'
    }

    const {price} = product;
    console.log(price);
    