/*
 ********************** Problems with callback function *****************
 -> 1) Inversion of controls
    2) Callback hell
*/

/*
********** Callback hell *********
    -> website to refer: callbackhell.com
    -> Readibility problem.
*/

/*
    *********** INVERSION OF CONTROL ***************
    -> The inversion of control says that the function which we are passing as the callback function to
       the higher order function. Actually we don't know what is the actual logic of higher order function,
       i.e. how will higher order function execute the callback function.
    -> Actually we are giving control to somebody else to execute the call-back function in the way they want.
    -> This problem is called inversion of control problem.
*/

function doTask(fn, x){
    // whole implementation is done by team A
    fn(x*x); // calling my callback function with square of x.
    fn(x*x);
} // coded by team A



doTask(function exec(num){ // due to callback, i am passing control of how exec function will be called to the function doTask()
    console.log("whoh, num is ", num);
}, 9);  // coded by team B