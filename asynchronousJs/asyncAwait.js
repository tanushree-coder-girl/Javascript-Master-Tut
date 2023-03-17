// Async Await keyword

// The async function declaration declares an async function where the await keyword is permitted within the function body. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.20-Feb-2023

// Inside an async function, you can use the await keyword before a call to a function that returns a promise. This makes the code wait at that point until the promise is settled, at which point the fulfilled value of the promise is treated as a return value, or the rejected value is thrown.

const URL = "https://jsonplaceholder.typicode.com/posts";

// using async await in functions declaration

// async function getPosts(){
//     const res = await fetch(URL);
//     if(!res.ok){
//         throw new Error('something went wrong')
//     }
//     const data = await res.json();
//     return data
// }

// using async await in arrow functions

const getPosts = async () => {
    const res = await fetch(URL);
    if(!res.ok){
        throw new Error('something went wrong')
    }
    const data = await res.json();
    return data
}

// Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise. Note: Even though the return value of an async function behaves as if it's wrapped in a Promise.20-Feb-2023
console.log(getPosts());

getPosts().then(res=>console.log(res)).catch(err=>console.log(err))
