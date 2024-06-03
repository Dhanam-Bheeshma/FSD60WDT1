function reqListener() {
    const Arr = JSON.parse(this.responseText);
    console.log(countryArr);
    for(let country of countryArr){
        console.log(country.name.common);
        console.log(countryname.region);
        console.log(country.sub-region);
        console.log(country.population);}
    }

  var XHR = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", ("https://restcountries.com/v3.1/all"));
  req.send();
  