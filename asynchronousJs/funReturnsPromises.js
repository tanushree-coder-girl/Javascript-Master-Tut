// Functions returning promises 

// function returnPromise (){
//     let counter = true;
//     return new Promise((resolve, reject)=>{
//         if(counter){
//             resolve();
//         }else{
//             reject();
//         }
//     })
// }
// // console.log(returnPromise())

// returnPromise().then(()=>{
//     console.log("promise is resloved")
// }).catch((err)=>console.log(err))

function myPromise (){
    return new Promise((resolve, reject)=>{
        let counter = false;
        setTimeout(() => {
            if(counter){
                resolve();
            }else{
                reject();
            }
        }, 2000);
    })
}

myPromise().then(()=>{
    console.log("promise is resloved")
}).catch(()=>console.log("promise is rejected"))