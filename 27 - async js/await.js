// async await
// async function always return a promise and always used in await in async function . await pauses the execution of its surrounding until the promise is settled

async function sayHello() {
    console.log('hello');
}
sayHello()

function getData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Data: ${id}`);
      resolve("netwrok error");
    }, 3000);
  });
}

console.log("Getting Data One");
// wrapped in IIFE
(async function () {
  try {
    await getData(12);
    console.log("Getting Data Two");
    await getData(24);
    console.log("Getting Data Three");
    await getData(36);
  } catch (error) {
    console.log(`Error : ${error}`);
  }
})();
