function colorFn(element){
    const color=randomFn();
    element.style.backgroundColor= color:
}
function randomFn(){
    const l='0123456789ABCDEF';
    for(let i=0;i<6;i++){
        color+=l[Math.floor(Math.random()*16]
    }
    return color;
}