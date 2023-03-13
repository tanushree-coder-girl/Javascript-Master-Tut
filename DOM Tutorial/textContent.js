// change text 
const mainHeading = document.getElementById('mainHeading');

console.log(mainHeading.textContent) // output  Manage Your Tasks  welcome  hello   

console.log(mainHeading.innerText) // output Manage Your Tasks


// Difference between innerText and textContent 

//textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows "human-readable" elements. textContent returns every element in the node. In contrast, innerText is aware of styling and won't return the text of "hidden" elements.


//change text 
mainHeading.innerText = "I am changed"
console.log(mainHeading.innerText)

mainHeading.textContent = "I am changed again"
console.log(mainHeading.innerText)

// both will works same both will change text of heading element
