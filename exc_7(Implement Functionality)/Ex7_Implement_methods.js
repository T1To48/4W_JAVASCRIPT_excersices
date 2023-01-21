// Ex7 - Implement The Following JS Methods -
// Implement the following methods -
// - Filter
// - ForEach
// - Map
// Using only for(), array and objects (without othejsr methods)


//*********FILTER

function filter(array,filterFunc){
   let filterArr=[];
   for (let x=0;x<array.length;x++){
      const result =filterFunc(array[x],x,array);
      if(result) filterArr.push(array[x]);
   }
return filterArr;
}
let arr = [1, 2, 3, 4, 5];
console.log(filter(arr,n=>n<2));

//*********MAP
function map(array1,mapFunc){
   let mapArr=[];
   for (let i=0;i<array1.length;i++){
      const results=mapFunc(array1[i],i,array1);
      mapArr.push(results);
   }
return mapArr;
}
let arr1 = [1, 2, 3, 4, 5];
console.log(map(arr1,n=>n+2));
//*********forEach
function foreach(array2,foreachfunc){
   for (let z=0;z<array2.length;z++){
      const results=foreachfunc(array2[z],z,array2);
   }
}

console.log(foreach(arr1,n=>console.log ((n+5)*2)))