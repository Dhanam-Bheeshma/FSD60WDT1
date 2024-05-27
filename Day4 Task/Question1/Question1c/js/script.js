//Sum of all numbers in an array
//Anonymous function
function sumArray(arr){
       var total=0;
    for (var i = 0; i<arr.length; i++) {
        total += arr[i];
           }
           return total;
   }
   var numbers =[1, 2, 3, 4, 5];
   var result= sumArray(numbers);
   console.log(result);
   
//IIFE
(function (){
    var sum=0;
    for (var i = 0; i<array.length; i++) {
        sum += array[i];
           }
    
    return sum;
})