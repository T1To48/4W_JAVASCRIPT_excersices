// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.


const findUniq=numbsArr=>{
  numbsArr.sort((a,b)=>a-b);
  if (numbsArr[0]!==0 && numbsArr[numbsArr.length-1]!==0){
  if(numbsArr[1]%numbsArr[0]!==0 || numbsArr[1]!==numbsArr[0]){
   return numbsArr[0];
  }
  if(numbsArr[numbsArr.length-2]%numbsArr[numbsArr.length-1]!==0 ){
   return numbsArr[numbsArr.length-1];
  }
  
}
if (numbsArr[0]===0 &&numbsArr[1]===0&& numbsArr[numbsArr.length-1]!==0){
   return numbsArr[numbsArr.length-1];
  }
if (numbsArr[0]!==0 &&numbsArr[numbsArr.length-2]===0&& numbsArr[numbsArr.length-1]===0){
   return numbsArr[0];
  }
if (numbsArr[0]===0 &&numbsArr[numbsArr.length-2]!==0&& numbsArr[numbsArr.length-1]!==0){
   return numbsArr[0];
  }
if (numbsArr[0]!==0 &&numbsArr[1]!==0&& numbsArr[numbsArr.length-1]===0){
   return numbsArr[numbsArr.length-1];
  }
}
console.log(findUniq([8,8,8,0.8]));







// for (let x=0;x<numbsArr.length;x++){
//    if(numbsArr[x]===0 && numbsArr[x]%numbsArr[x+1]==0){
//       return numbsArr[x+1];
//    }
//    if(numbsArr[x]%numbsArr[x+1]!==0){
//       return numbsArr[x+1];
//    }
// }