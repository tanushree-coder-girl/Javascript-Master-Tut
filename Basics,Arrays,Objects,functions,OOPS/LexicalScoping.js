// Lexical scope 

//A lexical scope or lexical chaining in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.


//Global scope variable
const grretAll = "hello, Good morning";

function outerFunction () {
    const Name = "Tanushree Ahir";
    const innerFun = () => {
        const Name = "Tanushri....";
        console.log(`inner fun => ${Name}`);
        console.log(grretAll);      // we can use global scope variable to everywhere
    }
    const innerFun2 = () => {
        console.log(`inner fun2 => ${Name}`);

        const innerFun4 = () => {
            console.log(`inner fun4 => ${grretAll}`);
        }
        innerFun4();
    }
    console.log(Name);
    innerFun();
    innerFun2();
}

outerFunction();