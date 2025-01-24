/*
    ****************** Equality Operator **************************
    -> In javascript, there are two types of equality operator.
        1) == (double equal to operator). This is called as "Abstract Equality".
        2) === (triple equal to operator). This is called as "Strict Equality".

    -> both the equality operator checks the type of both operands but what they do after checking the type depends on the operator.
*/

/* ***************************** Abstract Equlality Demo **********************************  */

// console.log(null == undefined);
// console.log(12 == "12");
// console.log(true == "1");
// console.log(false == "0");
/*
   x -> boolean -> toNumber -> false = 0
                               true  = 1.
*/
// console.log("NaN" == NaN);
// let obj = {
//     x: 10,
//     toString(){
//         return 100;
//     }
// }
// console.log(99 == obj);
// console.log(100 == obj);



/* ***************************** Strict Equlality Demo **********************************  */

// console.log(NaN === NaN);
// console.log(+0 === -0);
let obj1 = {x: 10};
let obj2 = {x: 10};
let obj3 = {x: 10};
console.log(obj1 === obj2);
console.log(obj1 === obj3);
console.log(obj1 === obj1);
//console.log({x: 10} === {x: 10});