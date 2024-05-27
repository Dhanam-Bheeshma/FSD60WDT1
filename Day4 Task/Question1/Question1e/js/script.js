//Return all the palindromes in an array
function isPalindrome(N)
 {
 let str = "" + N;
 let len = str.length;
 for (let i = 0; i < parseInt(length / 2, 10); i++)
 {
  if (str[i] != str[length - 1 - i ])
  return false;
  }
  return true;
  }
    
  //Anonymous function  
   const function1= function(arr, n){
       for (let i = 0; i < n; i++)
   {
   let ans = isPalindrome(arr[i]);
    if (ans == false)
   return false;
   }
    return true;
  }
    
  //IIFE
  (  function (arr, n){
    for (let i = 0; i < n; i++)
    {
    let ans = isPalindrome(arr[i]);
    if (ans == false)
    return false;
    }
    return true;
   })([1,2,3] , 3)