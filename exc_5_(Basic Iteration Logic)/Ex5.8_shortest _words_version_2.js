// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.
function longest(str){
   let arr=str.split(' ');
   arr.sort((a,b)=>b.length-a.length);
   return arr[0];
}

let satz="lorem ipsum mediterranean dolores  machitos ";

console.log(longest(satz));