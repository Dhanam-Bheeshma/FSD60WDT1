function add(num1,num2,next){
    setTimeout(function(){
        next(num1+num2);
        return num1+num2;
    })
}
add(10,20,console.log);
add(10,20,function(x){console.log(x*x)})        
