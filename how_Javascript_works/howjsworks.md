# How javascript works? 

### Two steps: compiling and execution

When a piece of JavaScript codes is run, we are talking about two steps: compiling and execution.

JavaScript engine has to go through two step process: compilation/parsing and execution (interpretation). Normally people don’t think about the compilation process.

# Steps 

1. Compilation phase
    - Tokenizing / lexing 
    - parsing
    - code generation 

        - in compilation phase js breaks code in small pieces and parsing all the code and create a AST.
        - An Abstract Syntax Tree, or AST, is a tree representation of the source code of a computer program that conveys the structure of the source code. Each node in the tree represents a construct occurring in the source code.
        - The programs are compiled before they are executed. Compilation is important to consider and learn because it is during compilation that scope is determined.

            - Early error checking
            - Determine appropriate scope of variables  


2. Code Execution phase

    In JS code executes inside execution context
    
    Global execution context has two phaes

        - Creation phase 
            in creation phase all the variables and function are hoisted in global memory. 
            and global memory has a window object 
            also set this value to window object 
            window {}
            this = windows obj 
            var variable = undefined 
            let / const variable = uninitialized 
            function = function() 

        - Code execution phase 
            An execution phase is the one where the JS engines scan through the function in the code once again, i.e., one more time for updating the variable object with the values of the variables and then run the code.

Things to remember : 
    
    Js is a single threaded synchronous programming language and all code run line by line in js. 



### Summary  

1. compilation phase
    - errors checking 
    - determine scope of variables

1. compilation phase 

    - In order to execute JS code JS Engine(v8 engine) creates global execution context
        
        - creation phase -> memory create 
        - line by line code execution 

