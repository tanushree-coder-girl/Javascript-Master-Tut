// CallBack Function 

//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

function myFunction (callback){
    console.log(callback)
    callback("tanu")
}

function myNewFun (name){
    console.log('mynew func', name)
}
myFunction(myNewFun)