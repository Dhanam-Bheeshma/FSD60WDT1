const myPromise=new Promise(function(resolve,reject){
    setTimeout(()=>{
        const x= Math.random();
        if(x<0.5){
            resolve(x);
        }
            else{
                reject("The value is greater than 0.49");
            }
        },5000);
        });

        console.log(myPromise);
        myPromise
        .then((data)=>console.log(data))
        .catch((reason)=>console.warn(reason));


        //Promise Chaining