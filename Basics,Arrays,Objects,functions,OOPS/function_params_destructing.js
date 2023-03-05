// Params destructing in functions.. 

// object - used with object params.. 
// React - most used in 

let personObj = {
    fname: 'tanu',
    lname: 'yadav',
    profession: 'developer'
}

const personDetails = ({fname, lname, profession}) => {
    console.log(profession, lname, fname);
}

personDetails(personObj);