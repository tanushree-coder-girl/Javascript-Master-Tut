function myFun(power){              //line-1
    function doSomething(number){ //1.
        return number ** power              //line-1 of dosomething func
    }
    return doSomething  //2.
}

const square = myFun(2);            //line-2
const ans = square(2);              //line-3
console.log(ans) //output is 9      //line-4

// let's understand

// step1 - compilation 
    // early error checking 
    // determining scope 
        // global scope we have => myFun(), square and ans variable 

// step2 - Execution phase 
    // Global execution context 
    // 1. memory creation phase:
        //so in memory we have 
        // myFun() 
        // square = uninitialized 
        // ans = uninitialized 
    // 2. code execution phase:
        // line-1 function myFun which is already present in memory 
        // line-2 const square = myFun(2);
            //line2 creates a FEC for myFun(2)

                    // FEC myFun(2)
                    //local memory creation phase 
                        // arguments [ '2' ]
                        // power = 2 
                        // doSomething function(){}
                    // code execution phase for myFun(2)
                        // line1 - function doSomething which is already present in local memory 
                        // line-2 return doSomething 
                        // so this line return doSomething function along with surrounding varaibles of it parent... 
        // line-2 now value of this square is... 
            // const square = function( number ){ return number ** power } + power
        //line-3 const ans = square(3);  
            //line3 creates a FEC for square(2)
             // FEC square(2)
                    //local memory creation phase 
                        // arguments [ '2' ]
                        // number = 2 
                    // code execution phase for myFun(2)
                        // line-1 return number ** power 
                        // so this line return number ** power 
                        // number is present in function local memroy or we have power in closures so its returns 2 ** 2 = 4 
         // line-3 now value of this ans is... 
            // const ans = 4;
        // line-4 console.log(ans) 
        // so the value of ans is 4 ...


// Practice 
const mainFunction = power => number => number ** power

const squareOfNum = mainFunction(2);
const squareValue = squareOfNum(5);
console.log(squareValue)

const cubeOfNum = mainFunction(3);
const cubeValue = cubeOfNum(5);
console.log(cubeValue)