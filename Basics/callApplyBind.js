const user1 = {
    firstName: 'John',
    age: 21,
    about: function(){
        console.log(this.firstName, this.age) // output: jessy 11s
    },
    hobby: function(hoobies, another){
        console.log(`${this.firstName} loves to ${hoobies} also love to ${another}`);
    }
}

const user2 = {
    firstName: 'jessy',
    age: 11,
}


// Call method
// using call we can pas a object for which we want to use this keyword
user1.about.call(user2); // now this keyword is used user2 object 
// Output : jessy 11

// also can pas arguments like this
user1.hobby.call(user2, "Play guitar", 'cook'); // now this keyword is used user2 object
// Output: jessy loves to Play guitar also love to cook

// Apply method 
user1.hobby.apply(user1, ["code", 'walking']);  // the only difference between apply and call is that apply take an array for other arguments.
// Output: John loves to code also love to walking

// Bind Method 
// bind return a function 
const user2Data = user1.hobby.bind(user2, "play cricket", "travelling");
user2Data() //jessy loves to play cricket also love to travelling


// Also we can create function outside then bind with any objects like this... 
function details (greetMsg){
    console.log(this.firstName, this.age, greetMsg)
}

details.call(user1, 'hello user user1') // output: John 21 hello user user1
details.apply(user2, ['hello user user2']) // output: jessy 11 hello user user2
const user2BindDetailsFunc = details.bind(user2, 'bind user2')
user2BindDetailsFunc();  // output => jessy 11 bind user2


//Summary.=>  call : binds the this value, invokes the function, and allows you to pass a list of arguments. apply : binds the this value, invokes the function, and allows you to pass arguments as an array. bind : binds the this value, returns a new function, and allows you to pass in a list of arguments.
