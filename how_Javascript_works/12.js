function myFun (){                                      //line1
    let counter = 0;    //1.
    return function(){  //2.
        if(counter < 1){        //(1)
            console.log('1st time called') //a.
            counter++;                      //b.
        }else{      //(2)
            console.log('already called') //a.
        }
    }

}
const funCall = myFun();                                //line2
funCall() // output =>1st time called                   //line3
funCall() // output => already called                   //line4

// const funCall2 = myFun();
// funCall2()
// funCall2()


// let's analyze the code ....

// step-1 => compilation phase 
    // global scope = myFun function, funCall variable, 
    // function scope variable => counter

// step-2 => code execution phase 
//Global execution context:
    //phase1 => Memory Creation phase
        // myFun () => function
        // funCall => uninitialized

    //phase2 => Code Execution phase
        //line1 => function decalration myFun() which is already present in Global memory
        //line2 => const funCall = myFun();
            // line2 calling function, function execution context for myFun()
            // Function Execution context = myFun(); 
                // local memory creation phase 
                    //arguments = []
                    // counter = uninitialized 
                // function code execution phase 
                    // line1 - set counter value to 0 
                        //counter = 0;
                    // line2 - returns a function
                            // return function(){ 
                            //     if(counter < 1){
                            //         console.log('1st time called')
                            //         counter++;
                            //     }else{
                            //         console.log('already called')
                            //     }
                            // } + surrounding variables = counter = 0; 

        //so now the value of funCall is 
        //line2 => let funCall = function(){
            // if(counter < 1){
            //     console.log('1st time called')
            //     counter++;
            // }else{
            //     console.log('already called')
            // }
        //}    + counter = 0;

        // line3 => funCall()
        // line3 calling function, function execution context for funCall()
            // Function Execution funCall(); 
                // local memory creation phase 
                    //arguments = []
                // function code execution phase 
                    // line1 - check condition if counter is less than 1 
                    // so counter value is 0 
                    // so it will enter in the if block 
                    // inside if block
                        //a. console.log('1st time called')   so it print 1st time called 
                        //b. counter++ // so it increament counter value from 1 so now counter value becomes 1 
                    
                        // counter = 1;
                        // pop fec and again go to GEC.

        // line4  => funCall()
        // line3 calling function, function execution context for funCall()
            // Function Execution funCall(); 
                // local memory creation phase 
                    //arguments = []
                // function code execution phase 
                    // line1 - check condition if counter is less than 1 
                    // so the counter value is 1 this time so the condition is false and its goes on else block 
                    // line2 else   console.log('already called')  
                    // print already called .

