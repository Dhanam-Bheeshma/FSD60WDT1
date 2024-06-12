const till=Date.now()+ 0.5*60*1000;
const timer=document.querySelector(".timer");
const btn=document.querySelector(".resend");

const intervalId=setInterval(()=>{
    const now=Date.now();
    const diff=till-now;
    console.log(now, till);
    const minutes=Math.floor(diff/1000/60);
    const seconds=Math.floor(diff/1000)%60;
},1000);

set

