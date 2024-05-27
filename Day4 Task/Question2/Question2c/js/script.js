//Sum of all numbers in an array
//Arrow function
 sum = (array)=>{
    var sum = 0;
 for(var i = 0; i<array.length; i++) {
     sum += array[i];
        }
        return sum;
    }
    console.log(sum([1,2,3,4,5]));