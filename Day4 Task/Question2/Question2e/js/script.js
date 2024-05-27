//Return all the palindromes in an array  
//Arrow function
Palindrome = (arr, n) =>{
for (let i = 0; i < n; i++){
  let ans = isPalindrome(arr[i]);
   if (ans == false){
   console.log(arr[i]);
   } 
return false;  
}
 return true; 
}
([1,2,3], 3);