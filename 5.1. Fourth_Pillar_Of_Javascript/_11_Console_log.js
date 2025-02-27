/*
    ************* Console.log **********************
    -> It is not a core javascript feature.
    -> It is runtime feature because javascript doesn't know about console.
    -> Runtime provides both synchronus as well as asynchronous feature.
       If runtime provides synchronous feature then the code will have synchronous flow.
    -> Runtime decides the behaviour of console.log() i.e. whether it will behave in synchronous or asynchronous.
*/

console.log("Hi");
for(let i = 0; i < 100000000; i++){
    // some logic
}
console.log("by");