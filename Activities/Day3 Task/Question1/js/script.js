function reqListener() {
    const Arr = JSON.parse(this.responseText);
    console.log(Arr);
}
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();

  let obj1 = {name: " Person 1", age: 5};
  let obj2 = {age: 5, name: " Person 1"};

  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  key1.sort();
  key2.sort();

  let boolean = true;
  for(let i=0;i<key1.length;i++){
    boolean = obj1["key1[i]"] == obj2["key2[i]"];
    if(!boolean){
      console.log("both Objects are not same");
      break;
    }
  else{
  console.log("both Objects are same");
  }
}