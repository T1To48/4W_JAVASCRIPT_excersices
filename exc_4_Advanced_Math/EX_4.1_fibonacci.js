// Ex4.1 - Fibonacci -
// “Write a function to return an n element in Fibonacci sequence” is one of the most common
// questions you can hear during the coding challenge interview part. In this blogpost I’m going to
// walk through the two of the most typical solutions for this problem and also cover a dreadful (for
// most of novice developers) topic of time complexity.
// So what is a Fibonacci sequence? According to Wikipedia :
// “In mathematics, the Fibonacci numbers are the numbers in the following integer sequence,
// called the Fibonacci sequence, and characterized by the fact that every number after the first
// two is the sum of the two preceding ones.”
// Depending on the chosen starting point of the sequence (0 or 1) the sequence would look like
// this:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …

//I HAVE STARTED MY SEQUENCE WITH 0//
// WHERE THE FIRST PLACE VALUE IS 0 THEN n ELEMENT=1//

function fibonacciValue(nElement){
   let indxnumb=nElement-1;
   let fn=[0,1,1];
   if(indxnumb>2){
   for (let x=3;x<=indxnumb;x++){
      fn.push(fn[x-1]+fn[x-2]);
   }
   return fn[fn.length-1];
}
if(indxnumb===0){
   return fn[0];
}
if(indxnumb===1){
   return fn[1];
}
if(indxnumb===2){
   return fn[2];
}

   }

   console.log(fibonacciValue(25));
