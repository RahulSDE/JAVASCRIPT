let obj = {x: 10, y: 20};
let num = 10
console.log("My age is " + 34);
console.log("My age is ", 34);
console.log(`My age is ${num}`);
/* 
    -> if we use back-tick(``), then we are using templated string
    -> In templated String, whenever we use ${variable name}, then the value of the variable get converted into string and then printed.
*/

console.log(1 < 2 < 3);
/*
 Execution of instruction : console.log(1 < 2 < 3);
    step 1: 1 < 2 -> true
    step 2: true < 3
    step 3: true is not a number, hence true get typecasted into a number which is 1.
    step 3: 1 < 3 -> true
*/ 
console.log(3 > 2 > 1);
/*
    Execution of instruction : console.log(1 < 2 < 3);
    step 1: 3 > 2 -> true
    step 2: true > 1
    step 3: true is not a number, hence true get typecasted into a number which is 1.
    step 3: 1 > 1 -> false
*/