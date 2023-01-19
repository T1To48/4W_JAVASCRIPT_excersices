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
let arrr=[5,10,50,1];
console.log(sumLowst2([5,10,50,19]));
