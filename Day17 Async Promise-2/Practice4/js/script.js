function createPromise(num){
    return new Promise(
        function(resolve,reject){
            setTimeout(function(){
                if(Math.random() <0.5){
                    resolve("Promise Resolved" +num);
                } 
                else{
                    reject("Promise Rejected" +num);
                }
            },Math.random()*20);
                });
            }
 //Promise.all
 //Promise.any
 //Promise.allSettled
 //Promise.race
            
Promise.race([
    createPromise(1),
    createPromise(2),
    createPromise(3),
    createPromise(4),
    createPromise(5),
    createPromise(6),
    createPromise(7),
])

.then((result) =>console.log(result))
.catch((reason)=>console.log(reason));