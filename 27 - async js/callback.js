// Lecture 27 : Asyncronous JS
// Sync : line by line code execute hota hai har code previous code ka execute hone per wait krta hai
console.log('Step 1');
console.log('Step 2');
console.log('Step 3');

// Asynchronous : kisi instruction ko execute hone me der lag rh hai to to agla wala code turant chl haiga wo iska wait bilkul bh nh krega jese API se data ane wait krna par rh hai to agai wala code jo hoga wo execute hojai ga

console.log('Start');
setTimeout(() => {
    console.log('Code execute afetr 3 sec');
}, 3000);
console.log('End'); // ye wala code bilkul bh wait nh krega previous code ka

// Callback : aik fnc kai ander aik or fnc pass krdena as arguments called a callback
function calculate(a,b,sumcb) {
    return sumcb(a,b)
}
let result = calculate(30,20,(a,b)=> a+b)
console.log(result);

// // Task: Async Callback with setTimeout
function printMes(cb) {
    setTimeout(() => {
        console.log("Hello from callback!");
        cb()
    }, 2000);
}
function msg() {
    console.log('Callback executed after message');

}
printMes(msg)

// Callback Hell : hell mtlb kisi jaga bure tareeqe se phas jana jaha phr apko nested callbacks dekhe smj jao ye yaha callback hell ho rh hai . code ki readabilty bohat khrab hojati hai manage krna mushkil hojata hai

function data(id, cb) {
  setTimeout(() => {
    console.log("ID", id);
    if (cb) {
      cb();
    }
  }, 2000);
}
console.log("getting data 1");
data(1, () => {
  console.log("getting data 2");
  data(2, () => {
    console.log("getting data 3");
    data(3, () => {
      console.log("getting data 4");
      data(4);
    });
  });
});
