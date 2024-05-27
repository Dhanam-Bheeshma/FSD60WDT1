//Return all the prime numbers in an array
//Arrow function

let primeTill = value => {
     for (let i = 2; i <= value; i++){
        if (value % 2 === 0){
            return false;
        }
        return true;
        }
        console.log(primeTill(10));
              return primeTill(10);
    };