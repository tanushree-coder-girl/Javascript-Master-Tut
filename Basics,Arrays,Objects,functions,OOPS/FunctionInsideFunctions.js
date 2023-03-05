// Function inside functions 

const app = () => {
    function fun1 (){
        console.log('hello from fun1')
    }
    const fun2 = () => 'hello from fun2';
    
    let fun3 = function(){
        console.log('hello from fun3')
    }
    console.log('app');
    fun1();
    const returnval = fun2();
    console.log(returnval)
    fun3();
}

app();