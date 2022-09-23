function myFunc(a, b, ...rest){
    console.log(arguments); // [Arguments] { '0': 7, '1': 8, '2': 10, '3': 12, '4': 3, '5': 4 }
    console.log(rest); // [ 10, 12, 3, 4 ]
    
}
// myFunc(7, 8, 10, 12, 3, 4);


