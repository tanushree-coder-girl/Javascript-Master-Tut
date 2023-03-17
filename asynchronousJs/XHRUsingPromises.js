// XHR using promises 
const URL = 'https://jsonplaceholder.typicode.com/posts';

function sendRequest (method, url){
    return new Promise(function(resolve, reject){
        const xhr = new XMLHttpRequest();
        xhr.open(method, url)
        xhr.onload = function(){
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response)
            }else{
                reject(new Error('something went wrong'));
            }
        }
        xhr.send();
    })
}

sendRequest("GET", URL).then((res)=>{
    return JSON.parse(res)
}).then((result)=>{
    const thirdData = result[3].id;
    return thirdData;
}).then((id)=>{
    const newUrl = `${URL}/${id}`
    return sendRequest("GET", newUrl)
}).then((data)=>{
    console.log(JSON.parse(data))
}).catch((err)=>{
    console.log(err)
})