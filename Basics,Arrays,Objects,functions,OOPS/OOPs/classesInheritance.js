class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    eat(){
        return `${this.name} is  eating`
    }
    isCute(){
        return this.age < 5
    }
}

// const animalObj = new Animal("Goat", 2);
// console.log(animalObj.eat());
// console.log(animalObj.isCute());

// Extends
// The extends keyword is used to create a child class of another class (parent). The child class inherits all the methods from another class. Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

// using extend we can access parent properties and methods 
 class Dog extends Animal {   // dog is sub class / derived class or Animal is parent class/ base class 

 }

 const DogObj = new Dog('tom',2);
 console.log(DogObj.isCute())