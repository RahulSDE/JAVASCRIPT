/* ******************** CALLBACK FUNCTIONS *******************
    -> The function that is being passed as an arugment to the higher order function is called callback function.
    -> For example 
       fun() function excepts fn as an argument.
       function exec() is getting passed as an argument, hence exec() is an callback function.
*/
function fun(x, fn){
    for(let i = 0; i < x; i++){
        console.log(i);
    }
    fn();
}

fun(10, function exec(){
    console.log("I am being executed.");
})