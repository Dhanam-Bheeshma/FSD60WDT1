class Movie{
constructor(title,studio,rating = "PG"){
this.title = title;
this.studio =studio;
this.rating = rating;
}
get getPG(){
let titles = "";
if(this.rating == "PG"){
titles+= this.title;
}
return titles;
}
}

// b)
let rating = new Movie("Leo", "Seven Screen");
console.log(`1. B.)
Title : ${rating.title}
Studio : ${rating.studio}
Rating : ${rating.rating}`)

// c)
let PG = new Movie("Thunivu", "Zee Studios");
console.log(`C.)
Title : ${PG.title}
Studio : ${PG.studio}
Rating : ${PG.rating}

Title : ${PG.getPG}, ${rating.title}
`)


//https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md