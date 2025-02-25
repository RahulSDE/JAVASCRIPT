console.log("Hi");
/*
    -> Javascript is synchronous in nature for the core javascript code
       (the logic that is mentioned in the ecmascript documentation.)
    -> Here setTimeout() is not a part of ecmascript documentation.
    -> setTimeout() is provided to javascript by runtime.
    -> Hence, it is the runtime which decides whether setTimeout() will be synchronous or async.
    
*/
setTimeout(function fun(){
    console.log("timeout");
}, 5000);
console.log("by");