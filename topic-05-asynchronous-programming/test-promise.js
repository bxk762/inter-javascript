console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

setTimeout(() => {
    console.log("Timeout 20");
  }, 20);
  

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

//----

console.log("Start");

Promise.resolve().then(function () {
  console.log("Promise");
});

setTimeout(function () {
  console.log("Timeout");
}, 0);

console.log("End");

console.log("Start");

async function run() {
  console.log("Inside async function");

  await new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Timeout inside Promise");
      resolve();
    }, 0);
  });

  console.log("After await");
}

