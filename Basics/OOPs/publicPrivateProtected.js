// Internal interface = private
// External interface - public


//Public: These members of the class and available to everyone that can access the (owner) class instance.
//Private: These members are only accessible within the class that instantiated the object.
//Protected: This keyword allows a little more access than private members but a lot less than the public. A protected member is accessible within the class (similar to private) and any object that inherits from it. A protected value is shared across all layers of the prototype chain. It is not accessible by anybody else.


class Animal {
    #privateProperty;

    _protectedPropery = 10;

    constructor(name){
        this.name = name
        this.#privateProperty = "this is a private property";
    }

    publicMethods(){  // public method
        console.log(this.name)
    }

    getPrivatePropty() { 
        return this.#privateProperty;
    }

    #privateMethod() {
        return "this is a private method";
    }


}

const animalObj = new Animal("Tommy");
animalObj.publicMethods()

console.log(animalObj.getPrivatePropty())

console.log(animalObj["#privateProperty"]) //undefined
console.log(animalObj.privateMethod)

console.log(animalObj._protectedPropery)
