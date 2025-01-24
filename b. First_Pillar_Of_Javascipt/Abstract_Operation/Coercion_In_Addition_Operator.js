/*
    ************ Addition Operator ********************
    -> Addition Operator tries to convert both of its operand into toNumber(val) if it is not an object.
    -> if operand is an Object, then it calls toPrimitive(operand) and tries to convert the operand into primitive value.
    -> If any of the operand is String, then it convert both operands into string and return the concatenated value of them
 */
console.log(10 + 5);
console.log(10 + "5");
console.log("10" + "5");

let obj = {
    toString(){
        return "99";
    }
};
console.log(10 + obj);
