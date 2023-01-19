// Ex2.1 - Sum of lowest numbers
// Create a function that returns  
 //the sum of the two lowest positive numbers/  //  given in an array of
 //minimum 4 positive integers/  /No floats or non-positive integers will be passed./
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
function sumLowst2(numsArr){
   let m1n=Math.min(...numsArr);
   
   if (numsArr.length>=4){
     let minIndx=numsArr.indexOf(m1n);
     numsArr.splice(minIndx);
      let secondm1n = Math.min(...numsArr);
      let sumOFLowest2=(m1n + secondm1n); 
      return sumOFLowest2; 
   }
   else {console.log('the minimum is 4 diffrent integers');}
   
 }
 let arrr=[10, 343445353, 3453445, 3453545353453];
 console.log(sumLowst2(arrr));

