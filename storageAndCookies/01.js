// Web Storage 

// we have 2 types of web storage 
// Localstorage
// SessionStorage

// The browser has two types of storage: localStorage which stores data across page views, browser restarts and computer restarts, and sessionStorage which only stores data across page views.

// Localstorage 
// client side => stored and managed on client side FE only
// no expiration time
// storing space = 5 MB
 
// add Item 
localStorage.setItem('key', "value is") 
localStorage.setItem('userId', "24") 

//gettem
const getDate = localStorage.getItem('key')
console.log(getDate);

// delete date 
localStorage.removeItem('key')

// clearlocalstorage
localStorage.clear();

// sessionStorage 
// client side => stored and managed on client side FE only
// sessionStorage is cleared when the page session ends or broweser tab closed.
// storing space = 5 MB
// setItem
sessionStorage.setItem('sesionkey', 'sessionval')

//getItem
console.log(sessionStorage.getItem('sesionkey'))

// delete date 
sessionStorage.removeItem('sesionkey')

// clearlocalstorage
sessionStorage.clear();

//How to check storages in Chrome?
// Right-click and click on Inspect to open the developer console.
// Go to the Applications tab on the console.
// Expand the localstorage dropdown under the Storage section, select the website to see the details.




// localStorage and sessionStorage are almost identical and have the same API. The difference is that with sessionStorage , the data is persisted only until the window or tab is closed. With localStorage , the data is persisted until the user manually clears the browser cache or until your web app clears the data.27-Dec-2016


// BE session means 
// Server storage 
// session 
/// session is server side, session is stored and managed on backend server side. 
// session kam time m expire hota h min 15 min 
// session k pas 4kbps something space hota hai 