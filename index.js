
function add(num1, num2) {

    let result = num1 + num2;
    return result;

};
var added = add(2, 4)
// console.log(added);


function multiply(num1, num2) {
    let number = 0;
    for (var i = 1; i <= num1; i++) {
        number = add(number, num2);
        console.log("number", number, )
    }
   return number; 
};
var multiply = multiply(6, 8)
console.log(multiply)

