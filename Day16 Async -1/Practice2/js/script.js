const arr=[1,2,3,4];
function map(arr,next=()=>{}){
    let arr2=[];
    for(num of arr){
        arr2.push(next(num));
    }
    return arr2;
    }
    console.log(map(arr,(x)=>x*2));
console.log(map(arr,(x)=>{
    (x+5)*3
}))