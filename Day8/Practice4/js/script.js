function hello(params){
console.log("Hello");
}
const arr = []
document.addEventListener("keypress",(event)=>{
    arr.push(event.key);
    console.log(arr.join(" "));
})