// Same method in parent class and subclass
// eat method is common in both

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

 class Dog extends Animal {
    constructor(name, age, food){
        // A rule : must call super constructor in derived or sub class  so that it can use and access its parent class this
        super(name, age);
        this.food = food; // its own property
    }

    //If subclass (child class) has the same method as declared in the parent class, it is known as method overriding in Java. In other words, If a subclass provides the specific implementation of the method that has been declared by one of its parent class, it is known as method overriding.
    eat(){
        return `${this.name} is eating ${this.food}`
    }
 }

 // dog object /  dog instance  
 const DogObj = new Dog('tom',2, 'Dog biscuit');
 console.log(DogObj.eat());

 // Animal obj / animal instance 
 const anilmalObj = new Animal('Rabbit',4)
 console.log(anilmalObj.eat());

 // so now it will access itw own method which is present in Dog class 
 // if it is not present in Dog class then it will call method from parent class...
