/*
    *************** setInterval(function fn(){}, 1000); ******************

    -> It takes two arguments
            - The first one is callback function.
            - The second one is time, the runtime will execute the callback function infinitely and the gap between 
              each callback function() execution is this time only here 1000 ms.
    -> In the chrome browser environment, it return the number which is the id of the given setInterval which is unique.
    -> In the node environment, it return the object which is the id of the given setInterval which is unique.


*/

let x = setInterval(function fn(){console.log("the first one")}, 1000);
let y = setInterval(function gn(){console.log("the second one")}, 500);
clearInterval(x); // this will stop the set interval having the id x.
console.log(typeof x);
console.log(typeof y);
