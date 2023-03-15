//enhanced debouncing
// trailing debouncing
//This is the default way of debouncing. It postpones execution until after an interval has elapsed since the last time the function was invoked. Simply put, it groups successive events and sends the requests as one to the backend service.

// leading debouncing
// calls first time after that  It postpones execution until after an interval has elapsed since the last time the function was invoked.

// Dom  element reference
const inputBox = document.getElementById("myInput");
const btn = document.querySelector(".myBtn");

// Trailing debouncing example
function trailingDebouncing(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.call(this, ...args);
    }, delay);
  };
}

inputBox.addEventListener(
  "input",
  trailingDebouncing((e) => {
    console.log(e.target.value);
  }, 2000)
);

// leading debouncing example
function leadingDebounce(fun, delay) {
  let timeoutId = null;
  return function (...args) {
    if (timeoutId === null) {
      fun.call(this, ...args);
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
    }, delay);
  };
}

btn.addEventListener(
  "click",
  leadingDebounce(function () {
    console.log(this.textContent);
  }, 2000)
);

// Trailing and leading debouncing in one function
const cartBtn = document.getElementById("addtocart");

function debounce(func, delay, options = { leading: false, trailing: true }) {
  let timeoutId = null;

  return function (...args) {
    let isInvoked = false;
    if (timeoutId === null && options.leading) {
      func.call(this, ...args);
      isInvoked = true;
    }

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
        if(options.trailing && !isInvoked){
            func.call(this, ...args);
        }

        timeoutId = null;
    }, delay);
  };
}

function clickMe() {
  console.log("button is clicked");
}

// Trailing debouncing
// cartBtn.addEventListener("click", debounce(clickMe, 2000));

//leading debouncing
cartBtn.addEventListener("click", debounce(clickMe, 2000, {leading:true, trailing:false}));
