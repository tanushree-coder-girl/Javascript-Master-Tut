// NodeList vs HTMLCollection
// How to iterate NodeList or HTMLCollection


// get multiple elements using getElementsByClassName
// return HTMLCollection  which is Array like obj -> indexing , length, property 
const listItems = document.getElementsByClassName('navItem');
console.log(listItems)
// console.log(listItems.length)
// console.log(listItems[1])
// console.log(Array.isArray(listItems)) // false

// we can iterate HTMLCollection using the followings - 
// simple for loop
// for of loop 

for (let i =0; i < listItems.length; i++){
    console.log(listItems[i].textContent)
    listItems[i].style.backgroundColor = 'blue';
}

for (const items of listItems) {
    console.log(items.textContent);
}

//Note: we can use forEach method to iterate through HTMLCollection 

// but we can convert HTMLCollection to array using Array.from() then we can use forEach Method also 
let arrayOflistItem = Array.from(listItems);
// console.log(Array.isArray(arrayOflistItem))
arrayOflistItem.forEach((val)=>{
    console.log(val.textContent)
})


// get multiple elements using querySelectorAll
// return NodeList which is  Array like obj -> indexing , length, property 
const listItems2 = document.querySelectorAll('.navItem a');
console.log(listItems2)
// console.log(listItems2.length)
// console.log(listItems2[1])
// console.log(Array.isArray(listItems2)) // false

// we can iterate NodeList using the followings - 
// simple for loop
// for of loop 
// forEach loop 

for(let i = 0; i < listItems2.length; i++) {
    let linkItem = listItems2[i];
    linkItem.style.color = 'white';
    linkItem.style.padding = '.5rem 1rem';
    linkItem.style.backgroundColor = 'blue';
}


for (const items of listItems2) {
    console.log(items.textContent);
}

listItems2.forEach((item)=>{
    console.log(item.innerText)
})