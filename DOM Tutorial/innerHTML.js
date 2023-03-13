// InnerHTML 

//The innerHTML property can be used to write the dynamic html on the html document. It is used mostly in the web pages to generate the dynamic html such as registration form, comment form, links etc.


const heading = document.querySelector('#mainHeading');

console.log(heading.innerHTML)
heading.innerHTML = "<h1>InnerHtml changed</h1>"
heading.innerHTML += "<button class=\"btn\">InnerHtml changed</button>"
console.log(heading.innerHTML)
