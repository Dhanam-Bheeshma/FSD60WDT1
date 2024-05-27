//Convert all the strings to title caps in a string array
//Anonymous function
const function1 = function(string){
          for (var i = 0; i < string.length; i++) {
                string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    console.log(string[0]);
    result=string[0];
    break;
        }

    return result;
}
console.log(function1(["hello world"]));
//IIFE
(function(string){
       for (var i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    console.log(string[0]);
        }

    })(["hello world"]);