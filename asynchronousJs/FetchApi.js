// Fetch Api
// fetch api is a modern way of sending http request

// Reference guide
//https://jsonplaceholder.typicode.com/guide/

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL).then((res)=>{
//     console.log(res)
// })

//by default it take get method

// Errorhandling

fetch(URL)
  .then((response) => {
    // return response.json();
    if (response.ok) {
      return response.json();
    } else {
      // this error run when the api is not valid or any server related problem occurs
      throw new Error("something went wrong");
    }
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    // this catch block runs when there is network or internet related problem
    console.log(err);
    console.log("network related problem");
  });

// Creating a resource

// POST metohd

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "My Title",
    body: "My body",
    userId: 123,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
}).then((response) => {
    if(response.ok ){
        return response.json();
    }else{
        throw new Error("error occurs")
    }
}).then((json) => console.log(json))
.catch((err)=>console.log(err));
