//Return all the prime numbers in an array
//Anonymous function
const PrimeTill = function isPrime(value){
let primeNumbers =value;
 for (let i = 2; i <= value; i++){
  if (isPrime(value)){
 primeNumbers.push(value);
}
 return primeNumbers;
}
};
console.log(PrimeTill(10));
    
//IIFE 
 (function(primeNumbers){
 for (let value = 2; value <= n; value++){
 if (isPrime(value)){
    console.log(value);
 primeNumbers.push(value);
}
 return primeNumbers;
}});