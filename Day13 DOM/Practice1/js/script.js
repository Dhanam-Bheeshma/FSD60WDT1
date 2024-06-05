const rootDiv=document.createElement("div");
//rootDiv.id="root"
rootDiv.setAttribute("id","root")
console.log(rootDiv);
document.body.appendChild(rootDiv);


const names=[
    "Bheeshma",
    "Shruthi",
    "Puli",
    "Maha",
    "Sastha",
    "Aadvik",
];
const ul=document.createElement("ul");
names.forEach((name)=>{
    const li=document.createElement("li");
    li.innerText=name;
    ul.appendChild(li);
});

rootDiv.appendChild(ul);
ul.style.border="1px solid black";