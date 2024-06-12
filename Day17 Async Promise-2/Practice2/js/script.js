const fetchResult=fetch("https://raw.githubusercontent.com/PugazharasanC/rest-api/main/countriesV3.1.json");
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

    Promise.resolve("Success").then((value)=>{
        console.log(value);
    },
        (reason)=>{
            console.log(reason);
        }
    )