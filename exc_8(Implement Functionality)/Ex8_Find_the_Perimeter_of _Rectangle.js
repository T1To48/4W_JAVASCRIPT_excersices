// Create a function that takes length and width and finds the perimeter of a rectangle.
// Examples
// f£ 7 26
// indPerimeter(6, 7)
// findPerimeter(20, 10) —60
// findPerimeter(2, 9) —22
// Notes
// 1 Don't forget to return the result.
// 2 Ifyou're stuck, find help in the Resources tab.
// 3 Ifyou're really stuck, find solutions in the Solutions tab.
function rectangularPerimeter(height,width){
   let h=height*2;
   let w=width*2;
   return h+w;
}
console.log(rectangularPerimeter(2,9))