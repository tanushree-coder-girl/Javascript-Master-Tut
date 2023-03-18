
// default export 
export default class App {
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname
    }

    get getTheData(){
        console.log(this.fname + " " + this.lname)
    }
}



// Named export
export const fullName = "tanu ahir";

// Named export bottom way
const msg = "hello everyone";
export { msg }