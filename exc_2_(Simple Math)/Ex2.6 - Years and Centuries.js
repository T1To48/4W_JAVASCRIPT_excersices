// The first century spans from the year 1 up to and including the year 100, The second - from the
// year 101 up to and including the year 200, etc.
// Task :
// Given a year, return the century it is in.
// Input , Output Examples ::
// centuryFromYear(1705) returns (18)
// centuryFromYear( 1900) returns (19)
// centuryFromYear(1601) returns (17)
// centuryFromYear(2000) returns (20)

const whichCentury=(century)=>{
   let calc=century/100+1;
   if (century%100!==0){
      return Math.trunc(calc);
   }
   if(century%100===0){
      calc -=1;
      return calc;
   }
}
console.log(whichCentury(1601));