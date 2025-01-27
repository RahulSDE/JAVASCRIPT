var teacher = "Rahul";

function fun(){
    var teacher = "Manish";
    content = "software engineer";
    console.log(teacher);
}

function gun(){
    var student = "Pawan";
    console.log(student);
}

fun();
gun();
console.log(teacher);
//console.log(content); 
/*
> after calling fun(), when i accessed content then it did not give the error.
> before calling fun(), when i tried to access the content, then it gave me the error.
*/
