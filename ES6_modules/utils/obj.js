// Default export
const user = {
    id:1,
    username:"ankit",
    age:223
}

// named export
export const hoobies = ["cricket", "dancing", "singing", "coding"];
export const myHobbieIs = `my hooby is ${hoobies[3]}`


function myFunction() {
    return 'this is my fun'
}

const myFun2  = () => {
    return 'my arrow function'
}

const myFun3 = function() {
    return ' i m function expression'
}
export { myFunction, myFun2, myFun3}

// default export
export default user;