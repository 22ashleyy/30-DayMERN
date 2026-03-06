//array = a avariable that can hold more than one value

let fruit = ["apple", "banana", "orange"];
console.log(fruit[0]); //apple
console.log(fruit[1]);
let numofFruit = fruit.length;
//objects = a variable that can hold many values in terms of properties and methods
let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
console.log(person.name);
person.greet(); 

