// This is used for real world entities
// Used for Real world data 
// Array an object

// objects inside array 
// very useful for real world applications 

const users = [
    {
        userId : 1,
        fname: 'Ankit',
        gender: 'Male'
    },
    {
        userId : 2,
        fname: 'Basiht',
        gender: 'Male'
    },
    {
        userId : 3,
        fname: 'shreya',
        gender: 'Female'
    }
]

//map over an array of obj 
for(let user of users){
    console.log(user)
    console.log(`User id is ${user.userId} & name is ${user.fname}`)
}

const employee = [
    { eid : 1, fname: 'harsh', gender: 'Male'},
    { eid : 2, fname: 'vishal', gender: 'Male'},
    { eid : 3, fname: 'abhi', gender: 'Male'}
]

// Nested Array an oject Destructing 
// const [ employee1, employee2, employee3 ] = employee 
// const [ {fname}, , {eid} ] = employee           // for skip second we onlyuse ,
const [ {fname: employee1stName, gender}, , {eid: employee3Id} ] = employee           // getting 1st employee fname and gender and 3rd one eid

// console.log(fname, gender, eid)
console.log(`emplyee 1st name: ${employee1stName} , 3rd employee id: ${employee3Id}`)
