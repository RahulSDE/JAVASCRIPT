/* ******************** SetTimeout() ******************
    -> SetTimeout(function fun(), 40000) function takes two argument.
    -> The first argument is the function.
    -> The second argument is the time after which the funtion which is first argument will be run.
    -> Here, the fun() will execute after 4000 millisecond.
    
*/

setTimeout(function exec(){
    console.log("running after sometime");
}, 4000);