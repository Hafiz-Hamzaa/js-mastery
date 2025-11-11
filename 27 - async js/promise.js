// Promises in JS
// Prmise aik object hota hai , 3 states hoti hai : pending , fullfiled , rejected -- mostly ham promise khud se create nh krte ham zda tar consumed krte hai qkai API se ham data receive krte hao to waha se hame promise milta hai or ham bs usko handle krte hai

// Creating a Promise
let promise = new Promise((resolve,reject)=>{
    resolve("Success") // state : fullfiled
    // reject("some error occured") // state : rejected
})

// Handle the Promise use .then() and .catch()
const getPromise = () =>{
    return new Promise((res,rej) => {
        res("successfuly")
        // rej("rejected")
    })
}
let finalVal = getPromise()
finalVal.then((res) => {
    console.log(`Promise ${res} resolved and fullfiled`);
})
finalVal.catch((err) => {
    console.log(`Promise ${err}`);
})

// ------- Prmoise Chaining

function asyncFunc1(id) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('data 1 id : ',id);
            resolve("success")
        }, 3000);
    })
}

function asyncFunc2(id) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('data 2 id : ',id);
            resolve("success")
        }, 3000);
    })
}

function asyncFunc3(id) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('data 3 id : ',id);
            reject("error occured rejected")
        }, 3000);
    })
}

console.log('getting data 1 id');
asyncFunc1(10)
    .then((res) => {
        console.log('getting data 2 id');
        return asyncFunc2(20); // return karo taake next .then chain me aa jaye
    })
    .then((res) => {
        console.log('getting data 3 id');
        return asyncFunc3(30); // return karo taake error bhi catch me aa jaye
    })
    .then((res) => {
        console.log('All data fetched successfully');
    })
    .catch((err) => {
        console.log('Error:', err); // yahan saari errors handle ho jaayengi
    });