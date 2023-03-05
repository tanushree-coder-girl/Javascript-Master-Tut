// Static 
// The static properties and methods are assigned to the class function instead of to the prototype of the class function. So, we cannot call the static method and properties using the instance of the class. However, we can access the property and method directly using the class name.

class UserInfo {
    constructor(username){
        this.username = username;
    }

    getUserName(){
        console.log(this.username)
    }

    static classMethods(){
        console.log('hello i am static class method')
    }

    static personProperty = "Hello i am only accessable using UserInfo class"
}


const userInstance = new UserInfo('Mohit Raj');
userInstance.getUserName();

// Static method  call
UserInfo.classMethods();
console.log(UserInfo.personProperty);
