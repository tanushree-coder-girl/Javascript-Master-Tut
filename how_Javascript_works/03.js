///What happens to function expression  
console.log(myFun);  // line-1
var myFun =  function () {   // line -2
    console.log('hello')
}

console.log(myFun);   // line 3 


// lets understand the code 
// step -1 compilation => check errors if any , 2. scope of variables 
// so now js knows that we have a function expression 
// step -2 in execution phase create global execution context 
// 1. memory creation phase => it will set var myFun value to undefined 
// 2. code execution phase 
// line 1 -> console.log(myFun) => undefined 
// line -2 => set myFun value to a function in global memory 
// line -3 console.log(myFun) => (){console.log('hello')}

// so the output is 
//undefined 
// (){ console.log('hello') }


// Note : function decalration is treated as function at the time of creation phase 
// but function expression or arrow function is treated as variables in memory creation phase
// later in code execution phase changes it value