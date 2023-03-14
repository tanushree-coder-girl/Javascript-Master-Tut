// Event Bubbling and event capturing 

const grandParent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');


//Event Bubbling − Whenever an event happens on an element, the event handlers will first run on it and then on its parent and finally all the way up to its other ancestors. Event Capturing − It is the reverse of the event bubbling and here the event starts from the parent element and then to its child element.17-Jul-2020

//What is Event Bubbling? 
//Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.

// Event Capturing
// Event capturing is one of two ways to do event propagation in the HTML DOM. In event capturing, an event propagates from the outermost element to the target element. It is the opposite of event bubbling, where events propagate outwards from the target to the outer elements. Capturing happens before bubbling.


// By default is Event Bubbling 
// it means when event listen  starts from bottom to top , firstly it triggers innerMost then it check on its parent if there is any event it will perform this event.. 
// bubble means bottom to top 


//Event Bubbling
child.addEventListener('click', ()=>{
    alert('child is clicked')
})


parent.addEventListener('click', ()=>{
    alert('Parent is clicked')
})


grandParent.addEventListener('click', ()=>{
    alert('grandParent is clicked')
})

document.body.addEventListener('click', ()=>{
    alert('Body is clicked')
})



// Note => it addEventListener we can also value a third value which is a boolean value 
// true and false in addEventListener is Boolean that specifies whether the event needs to be captured or not.11-Feb-2013
// if we pass true value then the events start in capturing phase  

// EVent Capturing phase 
child.addEventListener('click', ()=>{
    alert('child is clicked')
},true)


parent.addEventListener('click', ()=>{
    alert('Parent is clicked')
}, true)


grandParent.addEventListener('click', ()=>{
    alert('grandParent is clicked')
}, true)

document.body.addEventListener('click', ()=>{
    
    alert('Body is clicked')
}, true)


//StopPropagation. The event. stopPropagation() method stops the propagation of an event from occurring in the bubbling or capturing phase.

// child.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     alert('child is clicked')
// },true)
