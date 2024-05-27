//Convert all the strings to title caps in a string array
//Arrow function

titleCase=((str)=>{
           for(var i=0;i<str.length;i++){
            str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
                console.log(str[0]);
    }
    result = str[0];
   })
   titleCase(['hello world']);