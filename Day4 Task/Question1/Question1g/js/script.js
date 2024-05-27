//Remove duplicates from an array
//Anonymous Function 
const function1= function(array){
let dup = [...new Set(array)];
console.log(dup);
}
//IIFE 
(function(array){
    let dup = [...new Set(array)];
    console.log(dup);}
   )
  array: ([1,1,2,3,4])