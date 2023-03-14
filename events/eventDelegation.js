
// Event Delegation 

//Event delegation in JavaScript is a pattern that efficiently handles events. Events can be added to a parent element instead of adding to every single element. It is useful because the event can be listened to on multiple elements by using just one vent handler. It also uses less memory and gives better performance.
//Event Delegation is a pattern based upon the concept of Event Bubbling. It is an event-handling pattern that allows you to handle events at a higher level in the DOM tree other than the level where the event was first received. 


const grandParent = document.querySelector('.grandparent');

grandParent.addEventListener('click', (e)=>{
    console.dir(e.target)
})