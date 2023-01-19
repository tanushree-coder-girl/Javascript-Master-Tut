// Function returns another function

function myFun (){
    function returningFun(){
        return "hello world"
    }
    return returningFun
}

const returnData = myFun();
const retunFunction = returnData();
console.log(retunFunction)

//HOC =>Higher order function 

function outerFun (){
    return function(){
        return "hello all"
    }
}

const returned = outerFun()
console.log(returned())