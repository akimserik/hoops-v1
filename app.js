// 1.
// let objectA = { a: "A" };
// let objectB = objectA;
// let objectC = { ...objectA };

// const first = objectA === objectB;
// const second = objectA === objectC;

// console.log(first);
// console.log(second);

// 2.
// helloFunction();
// helloExpression();

// function helloFunction(user = "name") {
//   console.log(`Hello, ${user}`);
// }

// const helloExpression = (user = "name") => {
//   console.log(`Hello, ${user}`);
// };

//3.
// const buttons = document.querySelectorAll("button");
// for (var i = 0; i < buttons.length; i += 1) {
//   buttons[i].innerText = i;
//   buttons[i].onclick = function () {
//     console.log(i);
//   };
// }

//4.
var counter = function () {
  var count = 0;
  return function () {
    return (count += 1);
  };
};

var c = counter();
console.log(c());
console.log(c());
console.log(c());
