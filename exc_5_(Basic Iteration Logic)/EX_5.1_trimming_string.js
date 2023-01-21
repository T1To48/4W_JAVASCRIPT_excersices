// It's pretty straightforward. Your goal is to create a function that removes the first and last
// characters of a string. You're given one parameter, the original string. You don't have to worry
// with strings with less than two characters.
function firstLast(str){
let arrOfStr=str.split(' ');
arrOfStr.splice(0,1)
arrOfStr.splice(arrOfStr.length-1,1);
let newStr=arrOfStr.join(' ');
return newStr;
}

let sentence='❤ appleseeds bootcamp is a very good programming course 💕';
console.log(firstLast(sentence));
