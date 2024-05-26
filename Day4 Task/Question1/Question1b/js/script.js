let string =string.toLowercase().split(' ');
const function1 = function (string) {
       for (var i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    console.log(string[i]);
        }

    return string.join();
}("hello world");