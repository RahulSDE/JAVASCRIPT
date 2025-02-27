/*
    * Promises are javascript object.
    * Promises -> Javascript object -> 2 properties(value and state).
    * value -> default is undefined.
    * state -> default is pending.
    * new Promise(function exec(resolve, reject)){
        // Any logic be it synchronous or asynchronous can be written.
        // if resolve(argument) is called
              -> state -> fullfilled. (i.e. state will go to fulfilled from pending).
              -> value -> argument    (i.e. value will be assigned the argument that is passed to the resolve() function).
        // if reject(argument) is called.
              -> state -> rejected. (i.e. state will go to rejected from pending).
              -> value -> argument    (i.e. value will be assigned the argument that is passed to the resolve() function).
      }
        -> Promise constructor takes executor callback exec() as an argument.
        -> This exec() function takes two functions resolve() and reject() as an argument.
*/

/*
    * At the time when the constructor generates a new Promise object, it also generates a pair of functions 
      called as "resolve" and "reject".
    * Generally the executor callback wraps some asynchronous / synchronous operations.
    * The executor is called synchronously.
    * 
*/