//Print the odd numbers in an array using Anonymous function and IIFE
//Anonymous function
const function1 = function (array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            console.log(array[i]);
                              }
    return array[i];

    }
}
//IIFE
const function2 = (function (array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            console.log(array[i]);
                  }

    }
})([1, 2, 3, 4])