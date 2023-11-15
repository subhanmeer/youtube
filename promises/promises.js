
// complete = true

// let prom = new Promise(function (resolve, reject) {
//     if(complete) {
//         resolve('I am successfull')
//     } else {
//         reject ('I am failed')
//     }
// })


// console.log(prom)


// function prome (complete){
// return new Promise(function (resolve, reject) {
//     if(complete){
// resolve("I am successfull.")
//     } else {
//         reject("I am Failed.")
//     }
// })
// }

// console.log(prome(true));


// function promee (complete){
//     return new Promise (function (resolve, reject) {
//         if (complete) {
//             resolve("i am successfull")
//         } else {
//             reject('i an failed')
//         }
//     })
// }

// let onfulfilment = (result) => {
//     // console.log(result);
// }

// let onRejection = (resutl) => {
//     console.log(result);
// }

// promee(true).then(onfulfilment).catch(onRejection)



// function promiseOne (complete) {
//     return new Promise(function (resolve, reject) {
//         console.log("Getching data, please wait");

//         setTimeout(() => {
//             if(complete) {
//                 resolve('I am successfull one')
//             } else {
//                 reject ('I am failed One')
//             }
//         }, 3000)
//     })
// }


// // onfulfilment = (result) => {
// // console.log(result)
// // }

// // onRejection = (result) => {
// //     console.log(result)
// // }

// promiseOne(true).then((result) => {
//     console.log(result);
// }).catch((result) => {
//     console.log(result);
// })




// function simplePromise() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//     const randomVAlue = parseInt(Math.random() * 100 + 1)
    
//     if(randomVAlue > 50){
//         resolve(randomVAlue)
//     } else {
//         reject('Promise rejected')
//     }
// }, 1000)
//     })
// }

// simplePromise().then(data=> {
//     console.log('Resolved:', data)
// }).catch(error => {
//     console.log('Reject:', error)
// })

///promise chaining



// function multipleByTwo(num) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
// resolve(num * 2)
//         }, 1000)
//     })
// }

// function addFive(num) {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
// resolve(num + 5)
//         }, 1000)
//     })
// }

// multipleByTwo(3).then(result => {
//     return addFive(result)
// })
// .then(finalResult => {
//     console.log('Final Result:', finalResult);
// })



// function step1 () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(1), 1000);
//     });
// }

// function step2(result) {
//     console.log(result);
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve(2)
//         }, 1000)
//     })
// }

// step1().then(step2).then(result => console.log(result))

// const promise1 = Promise.resolve(1)
// const promise2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve(2)
//     },1000)
// })

// const promise3 = new Promise((resolve, reject ) => {
//     setTimeout(() => reject('Promise 3 rejected'), 500)
// })


// Promise.all([promise1, promise2, promise3]).then(results => {
//     console.log('All proises resolaved');
// })
// .catch(error => {
//     console.log('Atleast one promise rejected');
// });



// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('resolved after 2 seconds');
//         resolve(2)
//     }, 2000)
// })

// p1.then((value) => {
//     console.log(value);
//     let p2 = new Promise((resolve, reject) => {
//         resolve("promise 2")
//     })
//     // return p2
// }).then((value) => {
//     console.log('we are done');
// }).then((value) => {
//     console.log('Now we are done');
// })



// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function() {
//         console.log('Async task is complete');
//         resolve ()
//     }, 1000)
// })


// promiseOne.then(function () {
//     console.log('promised consumed');
// })

// const promisethree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username :"chai", email : "example@gmail.com"})
//     },1000)
// })


// promisethree.then(function(user){
//     console.log(user);
// })

// async function getAllUsers () {
//     try {
//         const response = await fetch ('https://jsonplaceholder.typicode.com/users')
//       const data =await response.json()
//       console.log(data)
//     } catch (error) {
//         console.log('E:', error);
//     }
// }

// getAllUsers()




fetch('https://api.github.com/users/hiteshchoudhary')
.then((Response) => {
    return Response.json()
})
.then((data) => {
    console.log(data);
})
.catch((Error) => {
    console.log(Error);
})


const promiseFive = new Promise ((function (resolve, reject) {
    setTimeout(()=> {
        let error = true

        if (!error) {
            resolve({username: 'Javascript', password: '123'})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
}))


async function consumepromiseFive () {
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}

consumepromiseFive()

async function getAllUsers () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data =await response.json()
        console.log(data);
    } catch (error) {
        console.log('E:', error);
        
    }
}

getAllUsers()



const promiseFour = new Promise ((resolve, reject) => {
    setTimeout(() => {

        let error = ""
        if (!error) {
            resolve ({username: 'SUBHAN', password: '1234'})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

promiseFour.then((data) => {
console.log(data);

return data.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
})


const promiseOne = new Promise (() => {
    setTimeout(() => {
        console.log('async task is running');
        
    }, 1000);
})


function prom (complete) {
    return new Promise(function(resolve, reject){
        if (complete) {
            resolve('i am successfull')
        } else {
            reject ('i am failed')
        }
    })
}
prom(false).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})