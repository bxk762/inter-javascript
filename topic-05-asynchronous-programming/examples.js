// setTimeout(() => {
//     console.log("Done");
//   }, 1000);

// function greet() {
//     console.log("Hello");
//   }
// function start() {
//     greet();
//     console.log("Goodbye");
//   }
// start();

//start()
// greet()
// console.log()

// setTimeout 
// setInterval 
// fetch 
// event listeners

// console.log("Start");
// setTimeout(() => console.log("Timeout"), 0);
// console.log("End");
  
// console.log("Start");
// setTimeout(() => console.log("TimeoutX"), 500);
// setTimeout(() => console.log("Timeout1"), 0);
// Promise.resolve().then(() => console.log("Promise"));
// setTimeout(() => console.log("Timeout2"), 0);
// console.log("End");

// const promise = new Promise((resolve, reject) => {
//     console.log("1")
//     setTimeout(() => {
//       resolve("Data ready");
//     }, 1000);
//     console.log("2")
//   });
  
// console.log("A")
// promise.then(result => console.log(result)).catch(error=>console.error("Bad things happened", error))
// console.log("B")

// fetch("/data/api/weather/44281")
//   .then(response => response.json())
//   .then(json => process(json))
//   .catch(error => console.error(error));

async function loadData() {
    try {
      const response = await fetch('/data.json');
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("Failed to load", err);
    }
}

loadData();
  