// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
const wiederholen=(iteration,str)=>{
let repeats=str.repeat(iteration);

return repeats;

}
console.log(wiederholen(5,'Hello'));