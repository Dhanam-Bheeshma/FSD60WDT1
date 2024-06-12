const fetchResult=fetch("https://restcountries.com/v3.1/all");
console.log(fetchResult);

fetchResult
.then(function(res){
    console.log("Inside Fulfill Handler");
    console.log(res);
    return res.json()
    }).then(
        function(result){
            console.log("Inside Rejection");
            console.log(result);
        })
        .catch(function(reason){
            console.log("Inside Rejection handler");
        console.log(reason);
    });