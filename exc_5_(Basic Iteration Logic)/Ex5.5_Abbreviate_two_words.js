// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

function initial(fullName){
   let arr=fullName.split(' ');
   let output1=arr[0][0].toUpperCase();
   let output2=arr[1][0].toUpperCase();
   return `${output1}.${output2}`
}
console.log(initial('taufiq zayyad'));