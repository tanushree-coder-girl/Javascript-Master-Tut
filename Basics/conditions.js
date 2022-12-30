//if else 
let age = 21;
if (age > 18){
    console.log('you are 18+');
}else {
    console.log('nope')
}

//check if age is odd oe even
if(age%2 === 0){
    console.log('even')
}else {
    console.log('odd')
}


//Falsy values
// false 
// 0 
// undefined 
// null 
// ""


//truthy values 
//-1, 1, 2, 3, numbers strings "abcd" etc all are truthy except falsy

let test = "";
if(test){
    console.log('truthy values')
}else{
    console.log('falsy values')
}