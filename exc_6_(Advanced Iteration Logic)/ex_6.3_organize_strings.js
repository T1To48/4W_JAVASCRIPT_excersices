// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a ="xyaabbbccccdefww"
// b ="xxxxyyyyabklmopq"
// longest(a, b) -> “abcdefklmopqwxy"
// a ="abcdefghijklimnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklimnopqrstuvwxyz"
function longestStr(str1,str2){
   let str=str1.concat(str2);
   let arr= str.toLowerCase().split('');
   arr.sort();
for(let x=0;x<arr.length;x++){
   const accum=arr.reduce((obj,actual)=>{
      if(!obj[actual]) obj[actual]=0;
      obj[actual]++
      return obj;

   },{})
   return Object.keys(accum).join('');
}   

}
console.log(longestStr("xyaabbbCCdefww","xxxxyyyyabklmopqZ"));