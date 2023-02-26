// create objects using object literals [//normally object have two things--- 1. properties 2. method]
// 1. first system of creating object 
const player = {};
player.name = 'Small Nirob';
player.specialty = 'batsman';
player.bat = function () {
    console.log('swing your bat');
}
// console.log(player);
// player.bat();


/* [**************] */
    
const student = {
    name: 'Pandey',
    job: 'study',
    ball: function () {
        console.log('threw the ball');
    },
    salary: 10000
}

// 2. second system of creating object
// object constructor
const person = new Object();
// console.log(person);

//3. object create method
// const item = Object.create(null);
const std = Object.create(student);    //prototype chain
// console.log(std.name);

// 4. class        [****]
class Person{
    name = 'Abul';
    address = 'Sadar ghat';
    constructor(age) {
        this.age = age;
    }
}
const person1 = new Person(56);
// console.log(person1);

// 5. function
function Car(model, price) {
    this.model = model;
    this.price = price;
}
const tesla = new Car('elon', 32);
// console.log(tesla);