class Person{
    constructor(name,birthyear,place,email="sample@gmail.com"){
        this.name = name;
        this.birthyear = birthyear;
        this.place = place;
        this.email = email;
    }
    getAge(){
        return new Date().getFullYear() - this.birthyear;
    }
    getAgeInDays(){
        return this.getAge() * 365;
    }
    greetings(){
        return `Hello ${this.name}`;
    }
    static greetings(){
        return "Hello";
    }
}
const bheesh = new Person("Bheesh", 2020, "Thanjai", "bheesh@gmail.com")