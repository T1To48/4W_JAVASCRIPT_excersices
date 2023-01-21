//Given an array of ones and zeroes, convert the equivalent binary value to an integer.
function binToDeci(binaryArr){
   const inDecimal=binaryArr.reduce((value,actual)=>{
      return (value*2)+actual;
   },0)
   return inDecimal;

}
console.log(binToDeci([1, 0, 1, 1,0,1,0,1]))