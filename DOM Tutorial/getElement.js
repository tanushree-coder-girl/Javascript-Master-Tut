// getElementByID
    // getElementsById returns single html element

// querySelector 
    // querySelector returns single html element

// querySelectorAll
        // querySelectorAll returns multiple elements in a nodelist. nodeList is array like object

// getElementsByClassName
        // getElementsByClassName returns multiple elements in a HTMLCollection. HTMLCollection is array like object

// getElementsByTagName 
        // getElementsByTagName returns multiple elements in a HTMLCollection. HTMLCollection is array like object


// Get element by id
// we can select dom element by its id
const mainHeading = document.getElementById('mainHeading');
console.log(mainHeading);  // output => <h1 id="mainHeading"> Manage Your Tasks </h1>
console.dir(mainHeading);


// select element using querySelector 
// querySelector by Id
const heading = document.querySelector('#mainHeading');
console.log(heading)

// querySelector by className
const logo = document.querySelector('.logo');
console.log(logo)

// querySelector by tag name
const listItem = document.querySelector('nav ul li');
console.log(listItem)


//querySelectorAll
// We can get multiple elements using querySelectorAll  / NodeList
const allListItems = document.querySelectorAll('nav ul li');
console.log(allListItems)
console.log(allListItems.length)
console.log(allListItems[1])
console.log(Array.isArray(allListItems))
console.log(typeof allListItems)

// get element by className
// We can get multiple elements using getElementsByClassName / HTMLCollection
const navItems = document.getElementsByClassName("navItem")
console.log(navItems)
console.log(navItems.length)
console.log(navItems[1])

// get element by tagName
// We can get multiple elements using getElementsByTagName / HTMLCollection
const list = document.getElementsByTagName("li")
console.log(list)


// HTMLColletion nd NodeList is arrayLikeObject
// we can use length property and iterate using loops