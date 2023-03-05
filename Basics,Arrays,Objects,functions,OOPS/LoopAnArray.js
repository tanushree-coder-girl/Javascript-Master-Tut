
// Use Const for creating an array  
// its is best practice to use const for creating an array 
//bcoz objects is stored in heap memory  so we can apply all array methods in array while creating using const  
//  If your usecase only needs mutation, you can go for const.. if you need reassigning then go for let. 


//For loop im array 

const fruits = ['apple', 'mango', 'orange'];
fruits.push('guave');
console.log(fruits);

const fruit2 = [];

for (let index = 0; index < fruits.length; index++) {
   // console.log(fruits[index]);
    fruit2.push(fruits[index].toUpperCase());
}
console.log(fruit2)  


//While loop for iterate array
let i = 0;
while(i < fruits.length){
    console.log(fruits[i]);
    i++
}

// for of loop in array interation
for(let fruit of fruits) {
    console.log(fruit);
}

// mostly used for of and tradition for loop for array iteration. 


