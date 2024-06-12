let textarea=document.createElement("textarea");
document.body.appendChild(textarea);
textarea.value="Take a look at the console!";
textarea.setAttribute("cols","100");
textarea.setAttribute("rows","10");
textarea.setAttribute("place holder","Enter your message here");


const textarea=document.getElementById("myTextArea");
textarea.addEventListener("input",()=>{
    const charCount=document.querySelector(".charCount");
    charCount.textContent=textarea.ariaValueMax.length;
   });
