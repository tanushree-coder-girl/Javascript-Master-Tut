// loop - 

// 0 to 9
// let i = 0;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);

//DRY, which stands for 'don't repeat yourself,' is a principle of software development that aims at reducing the repetition of patterns and code duplication in favor of abstractions and avoiding redundancy.

//so usings loop 
//Loops allow you to repeat a process over and over without having to write the same (potentially long) instructions each time you want your program to perform a task

//while loop 
let i = 0;
while (i <= 9){
    console.log(i)
    i++
}

//while loop example 
let total = 10; 
let n = 0;
while(n <= 9){
    total = total + n;
    n++
}
console.log(total)

//another way of doing the same 
let numb = 10;
let t = (numb*(numb+1)/2)
console.log(t)


// Do while loop 
// The do... while statements combo defines a code block to be executed once, and repeated as long as a condition is true . The do... while is used when you want to run a code block at least one time

let val = 10;
do {
    val++
    console.log(val);

}while(val < 9)



//For loop
//print 0 to 9

// for (var j = 0; j <= 9; j++) {
//     console.log(j)    
// }

// also write like this
let j = 0;
for (; j <= 9; j++) {
    console.log(j)    
}
console.log(j);

// for loop example
let totalofallval = 0;
let target = 10;

for (let i = 0; i < target; i++) {
    totalofallval = totalofallval + i
}
console.log(totalofallval);


//break and continue keyword 

// Break keyword break the loop when condition matches
for (let i = 0; i < 9; i++) {
    if(i === 3){
        break;
    }
    console.log(i)
}

//continue keyword skip the loop value whether condition matches
for (let i = 0; i < 10; i++) {
    if(i === 5){
        continue;
    }    
    console.log(i)
}

