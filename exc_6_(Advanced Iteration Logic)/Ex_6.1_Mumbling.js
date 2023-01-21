// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-VWw-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z andA...Z.

function accum(str){
   let arr=str.split('');
   let accumulation=[arr[0].toUpperCase(),];
   for (let x=1;x<arr.length;x++){
      accumulation.push('-');
      let capital=arr[x].toUpperCase();
      accumulation.push(capital);
      let repeats=arr[x].toLowerCase().repeat(x);
      accumulation.push(repeats);
   }
   return accumulation.join('');
}

console.log(accum('abcdefghijklmnopqrstuvwxyz'));