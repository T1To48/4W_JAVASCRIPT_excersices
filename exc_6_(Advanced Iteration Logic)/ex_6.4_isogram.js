// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// islsogram("Dermatoglyphics") ==true
// islsogram("aba") ==false
// islsogram("moOse") ==false // -- ignore letter case
function isIsogram(str){
   let str1=[...str.toUpperCase()];
   let isISO=true;
   str1.forEach(letter=>{
      if(str1.indexOf(letter)!== str1.lastIndexOf(letter)){
         isISO=false;
      }

   });
return isISO;
   
}
let strr="dfgegrghrhrhrhrh"
console.log(isIsogram("abrhytgujik"))






// function isIsogram(str) {
//    let result = true;
//    let strArray = [...str.toLowerCase()];
//    strArray.forEach(element => {
//        if (strArray.indexOf(element) != strArray.lastIndexOf(element)) result = false;
//    });
//    return result;
// }
// console.log(isIsogram("abcd"));