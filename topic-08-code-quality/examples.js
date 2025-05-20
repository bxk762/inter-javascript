// const { jsx } = require("react/jsx-runtime");

// if (isReady)
//     start(); // Missing braces may be flagged

// const x=[1,2]; console.log(x);
// // becomes:
// const y = [1, 2];
// console.log(y);

function calculateArea(width, height) {
    return width * height;
}

function calculateArea(width, height) {
    lastResult = width * height; // modifies outer variable
    return lastResult;
}
  