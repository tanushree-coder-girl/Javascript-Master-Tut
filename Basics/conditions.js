//if else
let age = 21;
if (age > 18) {
  console.log("you are 18+");
} else {
  console.log("nope");
}

//check if age is odd oe even
if (age % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
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
if (test) {
  console.log("truthy values");
} else {
  console.log("falsy values");
}

// && or || operators
let fname = "Tanu";
let _myAge = 14;

// && operators returns true if both conditions are true
if (fname[0] === "T" && _myAge > 18) {
  console.log(`name is ${fname} & age is ${_myAge}`);
} else {
  console.log("inside else");
}

// || operators returns true either one conditions is true if will run if block if any of the conditions is are
if (fname[0] === "T" || _myAge > 18) {
  console.log(`name is ${fname} & age is ${_myAge}`);
} else {
  console.log("inside else");
}

// Nested if else conditions
// let winnigNum = 19;
// let userGuess = +prompt('Guess your number');
// console.log(typeof userGuess, userGuess);

// if(userGuess == winnigNum){
//     console.log('your guess is correct!!')
// }else{
//     if(userGuess > winnigNum){
//         console.log('too high');
//     }else{
//         console.log('too low');
//     }
// }

// If else if else if else if else
let temp = 24;
if (temp < 0) {
  console.log("extrem cold outside");
} else if (temp < 16) {
  console.log("cold outside");
} else if (temp < 25) {
  console.log("okay");
} else if (temp < 35) {
  console.log("go for swim");
} else if (temp < 45) {
  console.log("turn on ac");
} else {
  console.log("too hot");
}

//opposite
if (temp > 40) {
  console.log("too hot");
} else if (temp > 30) {
  console.log("go for swim");
} else if (temp > 20) {
  console.log("okay");
} else if (temp > 10) {
  console.log("very cold");
} else {
  console.log("too cold");
}

// let day = '0';

// if(day ==="0"){
//     console.log("Sunday");
// }else if(day ==="1"){
//     console.log("Monday");
// }else if(day ==="2"){
//     console.log("tuesday");
// }else if(day ==="3"){
//     console.log("wednesday");
// }else if(day ==="4"){
//     console.log("thursday");
// }else if(day ==="5"){
//     console.log("friday");
// }else if(day ==="6"){
//     console.log("saturday");
// }else{
//     console.log('invalid day')
// }

console.log("hy");

// Switch Case statement;
let days = 6;

switch (days) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("wednes");
    break;
  case 4:
    console.log("thurday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  default:
    console.log("invalid day");
    break;
}
