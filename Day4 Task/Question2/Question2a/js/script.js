//Print the odd numbers in an array using Anonymous function and IIFE
//Arrow function

oddNumbers = (array) => {
        for (var i = 0; i < array.length; i++) {
        if (array[i]% 2 != 0) {
            console.log(array[i]);
        }
          result=array[i];
} }
oddNumbers([1, 2, 3, 4]);