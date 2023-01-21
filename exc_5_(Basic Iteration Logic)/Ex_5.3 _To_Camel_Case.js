// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str){
   let dashStrToArr=str.split('-');
   let underscoreStrToArr=str.split('_');
   if (dashStrToArr.length>1 ){
      for(let x=1 ;x<dashStrToArr.length;x++){
            let z=dashStrToArr[x][0].toUpperCase();
            let arr1=dashStrToArr[x].replace(dashStrToArr[x][0],z);
            dashStrToArr[x]=arr1;
      }
      return dashStrToArr.join('');
      }
   if (underscoreStrToArr.length>1 ){
      for(let x=1 ;x<underscoreStrToArr.length;x++){
            let y=underscoreStrToArr[x][0].toUpperCase();
            let arr2=underscoreStrToArr[x].replace(underscoreStrToArr[x][0],y);
            underscoreStrToArr[x]=arr2;
      }
      return underscoreStrToArr.join('');
      }
      
   }

let satz="the_Stealth_warrior";
let x=satz.split('-');
console.log(toCamelCase(satz));
