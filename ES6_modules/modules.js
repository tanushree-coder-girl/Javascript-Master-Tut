

// Named import
import { fullName, msg } from './external.js';

// Default Import 
import App from './external.js';

// oneliner import for default and named 
import user, {hoobies, myHobbieIs} from './utils/obj.js'

// * star import for import all as object
import * as All from './utils/obj.js'

// alias import 
import { myFun3 as FunExpress} from './utils/obj.js'

const appobj = new App("tanu", "ahir");
appobj.getTheData;

console.log(fullName, msg);

console.log(user)
console.log(hoobies)
console.log(myHobbieIs)
console.log(All.myFun2())
console.log(All.myFunction())
console.log(FunExpress())
// What is module
// Javascript modules are a way of organizing and sharing code in javascript language. 

// they allow you to break up your code into smaller more manageble pieces and import and export functionality between files. 

// modules are created using the statements are - 
// import 
// export 

// to access variables , functions , classes , object from external javascript file to main js file. 

// Important Note 

// 1. modules only work with the http(s) protocol. (with live server)

// modules also rely on type="module" in the script tag/
// <script type="module" src="filename.js"></script>


// Export 
// The export statement is used to define what functionality in a module should be made availble to other parts of your code .

// There are two types of exports
//1. Named exports 
//2. Default exports 


// 1. named export 
// you can create named exports two ways ...
// A. In line individually 
// export const name = "Tanushree";
// export const age = 22; 

// B. All at once at the bottom. 
// const name = "Tanushree";
// const age = 21;

// export { name, age }              // bottom export 

//2. Default exports 
// the default export is used to export a single value function or object as the "default" export from a module

// you can only have one default exports in a file

// const msg = () => { 
//      const name = "tanu";
//      const age = 21;
//      return name + "is" + age + 'years old'
//}

// export default msg;

// Import 

// The import statement is used to bring functionality from another module into your current module. 
// with the help of including the path to the module file. relative to the current file.

// There are two ways to imports : based on if they are named exports or default exports. 

// import from named exports 

// named exports are constructed using curly braces. 
// example => import { name, age } from './file.js

// Import from default exports 
// default exports are not using curlyl braces.
// import something from './file.js

// Import from alias name 
// you can also use aliases to make it easier to refer to those modules 
// import { something as aliasName } from './file.js

//Import all using * as 
// to import all the functionality from an external js file into your current module you can use import * as syntx 
// import * as myModule from './file.js';
// Access any function from myModule 
// myModule.something();
