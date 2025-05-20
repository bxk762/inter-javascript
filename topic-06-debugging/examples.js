// let result = null;

// console.log(result.length); // TypeError: Cannot read property 'length' ofnull

// undeclaredVar + 5; // ReferenceError

// k ( -7i-) //SyntaxError

// try {
//     let data = JSON.parse("{ invalid json }");
// } catch (error) {
//     console.error("Caught error:", error.message);
// } finally {
//     console.log("Done attempting to parse.");
// }

// function divide(a, b) {
//     if (b === 0) {
//       throw new Error("Cannot divide by zero.");
//     }
//     return a / b;
// }

// class ValidationError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = "ValidationError";
//     }
//   }
  
// function checkName(name) {
//     if (name.length < 2) {
//        throw new ValidationError("Name is too short.");
//     }
// }
  
// * `console.log()` – general output
// * `console.error()` – highlight an error
// * `console.warn()` – highlight a caution
// * `console.table()` – display arrays/objects in tabular form
// * `console.trace()` – print a stack trace from the current 

// const people = [
//     { name: "Greg", age: 65 },
//     { name: "Sara", age: 29 }
// ];

// console.table(people)

function process(value) {
    debugger; // triggers dev tools pause
    return value.toUpperCase();
}

process("hello")
  