//let name = "bhee";
//let place = "thanjai";
//let yearOfBirth = "2020"
//let work = "student";

//const obj = {name,place, yearOfBirth,work};
//console.log(obj);

//let numberArr = [1,2,3,4,5,6,7,8,9,10];
//let num1 = 10;
//let num2 = 20;
//console.log(num1,num2);
//[num1,num2] = [num2,num1];
//console.log(num1,num2)

let obj1= {
    key: "value";
    key1: "value1";
    key2: "value2";
}
let obj2={
    key3: "value3";
    key4 "value4";
    key5: "value5";
}
let obj= {...obj1, ...obj2};
console.log(obj);