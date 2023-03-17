const URL = "https://jsonplaceholder.typicode.com/posts";

const req = new XMLHttpRequest();
req.open("GET", URL);

// onLoad function calls when readyState value is 4
req.onload = function () {
  // console.log(req.response)
  if (req.status >= 200 && req.status < 300) {
    console.log(JSON.parse(req.response));
  } else [console.log("something went wrong")];
};

req.onerror = function () {
  console.log("internet or network related error");
};

req.send();

// HTTP Status code means

// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)

// nested calling example
const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.onload = () => {
    if(xhr.status >= 200 && xhr.status < 300){
        const data = JSON.parse(xhr.response);

        firstpostId = data[0].id;
        const xhr2 = new XMLHttpRequest();
        const url2 = `${URL}/${firstpostId}`;
        xhr2.open("GET", url2);
        xhr2.onload = () => {
            console.log(JSON.parse(xhr2.response))
        }
        xhr2.send()

    } else{
        console.log('something went wrong')
    }
};

xhr.onerror = () => {
    console.log("internet or network related error");
}
xhr.send();
