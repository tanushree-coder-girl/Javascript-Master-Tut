// Javascpit cookies 
// client side => stored  on client side
// managed by both client side or server side 
// storing space = 4 kbps
// By default, the cookie is deleted when the browser is closed:

// cookies are small text files that the server sends to the user's web browser when visiting a web page . the browser can store  them and resend them to the same server on the next request . with cookies the web pages can remember your user preferences, keep you logged in as well as display content relevant to your region. 
// unlike localstorage , cookies are designed for sending information between the server and the client while localstorage is only for storing information on the client . 
//Localstorage can store up to 5 mb data, while cookies can only store 4kb data in textFormat. 
// By default, the cookie is deleted when the browser is closed:

// setCookie 
// in js we can create a cookie with the use of document.cookie propert 

document.cookie = "greeting=hello world"
document.cookie = "bool=True"

// with expiration time
document.cookie = "greet=goodmorning; expires=Sat Mar, 18 2023 18:18:51 UTC"
//or 
function setCookie (key,value, expDays){
    const d = new Date();
    d.setTime(d.getTime() + (expDays*24*60*60*1000));
    let expireTime = `expires=${d.toUTCString()}`
    document.cookie = `${key}=${value};${expireTime};path=/`;

}
setCookie('user', 'tanu', 28)

// readCookie
// to read the value of the cookie you can use the function like the one below and ass it the name of the cookie 

function getCookie(name){
    let cookieValue =null;
    if(document.cookie && document.cookie !== ""){
        const cookies = document.cookie.split(';')
        for (let i = 0; i < cookies.length; i++) {
           const cookie = cookies[i].trim()
           if(cookie.substring(0, name.length +1) ===name + "="){
            cookieValue = decodeURIComponent(cookie.substring(name.length+1))
           }
        }
    }
    return cookieValue
}
const greeting = getCookie('greeting')
console.log(greeting);

// delete a cookie 
// In order to delete a cookie  just set the expires parameter to the past date 

document.cookie = "bool=True; expires=Sat Mar, 1 2023 18:18:51 UTC; path=/"

// Note
//How to check cookies in Chrome?
// Right-click and click on Inspect to open the developer console.
// Go to the Applications tab on the console.
// Expand the Cookies dropdown under the Storage section. Under Cookies, select the website to see the cookie details.