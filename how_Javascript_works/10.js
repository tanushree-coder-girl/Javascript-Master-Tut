// Closure example - 2 

function hello (x){
    const a = 'val1';
    const b = 'val2';

    return () => {
        console.log(a, b, x)
    }
}

const retufu = hello("hey")
retufu();

// output is : val1 val2 hey


// compilation phase : early error checking or determining scope of variables
// code execution phase : global execution context 

// Global execution context 
    // memory creation phase 
        // function hello(){} 
        // retufu = uninitialized

    // execution phase 
        // line -1 function hello () =< present in global memory 
        // line- 2 const retufu = hello("hey")
       // it creates a function execution context : hello()

            // function execution context : hello()
                //local memory creation phase 
                    // Arguments 
                    // x = "hey"
                    // a = uninitialized 
                    // b = uninitialized

                // code execution phase  in function
                    // line-1 set a value to val1 
                    // line-2 set b valye to val2 
                        // now value of this variable is 
                        // a = val1 , b = val2

                    // line -3 return ()=> { console.log(a,b,x)} 
                    // so line 3 return this function + its surrounding variables 

                    // FEX closes here pop from call stack 
                    //back to GEC

        // so now line2 : retufu value is 
            // function (){
            //   console.log(a,b,x)
            //}
            // + surrounding variables => a  b  x

        // line -3 retufu();
        // it will create a function execution context 
                // FEC - retufu 
                // local memory => arguments 
                // code execution phase => print a ,b ,x 
                // a , b, x function jb return hua tb apne sath leke return hua tha 
                

                 // val1 , val2 , hey

// =====================================================
