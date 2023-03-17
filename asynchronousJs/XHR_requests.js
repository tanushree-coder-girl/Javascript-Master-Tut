// for free api  for testing purpose 
// https://jsonplaceholder.typicode.com/

// https://jsonplaceholder.typicode.com/posts 

// XHR request
// XML http request

const URL = 'https://jsonplaceholder.typicode.com/posts ';

const xhr = new XMLHttpRequest();
// console.log(xhr)
// console.log(xhr.readyState)

xhr.open('GET', URL)
// console.log(xhr.readyState)

xhr.onreadystatechange = function(){
    // console.log(xhr.readyState)

    if(xhr.readyState === 4){
        // console.log(xhr.response)
        const res = xhr.response;
        // console.log(typeof res , res)
        const data = JSON.parse(res)
        console.log(typeof data , data)
    }
}

xhr.send();

// what is readyState
//The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states: Value. State.

// State 4 means that the request had been sent, the server had finished returning the response and the browser had finished downloading the response content.29-May-2015

// XHR ready state docs.
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

// xml docs 
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest


