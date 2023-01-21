// Ex2.1 - Sum of lowest numbers
// Create a function that returns  
 //the sum of the two lowest positive numbers/  //  given in an array of
 //minimum 4 positive integers/  /No floats or non-positive integers will be passed./
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
function sumLowst2(numsArr){
   if (numsArr.length>=4){
    numsArr.sort((a,b)=>{return a-b});
   }
   else {console.log('the minimum is 4 diffrent integers');}
   return numsArr[0]+numsArr[1];
 }
 let arrr=[10, 343445353, 3453445, 3453545353453];
 console.log(sumLowst2(arrr));

