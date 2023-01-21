// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// islsogram("Dermatoglyphics") ==true
// islsogram("aba") ==false
// islsogram("moOse") ==false // -- ignore letter case
function isIsogram(str){
  let arr=str.toUpperCase().split('');
  
for(let x=0;x<arr.length;x++){
  let results=[];
   let res=[];
  const accum=arr.reduce((obj,actual)=>{
     if(!obj[actual]) obj[actual]=0;
     obj[actual]++
     return obj;

  },{})
  results.push(Object.values(accum));
  results.sort((a,b)=>a-b);
return results;;
  
}

}
console.log(isIsogram("abrtt"))