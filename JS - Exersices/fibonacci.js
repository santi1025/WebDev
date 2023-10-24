
var memo = {};
function fibonacci() {
  "use strict";
  var n = document.getElementById("num").value;
  var val = f(n);
  document.getElementById("fibonacciLbl").textContent = val;
}

function f(n) {
  var value;
 
  if (memo.hasOwnProperty(n)) {
    value = memo[n];
  } else {
    if (n <= 1) {
      return n;
    }
    value = f(n-1) + f(n-2);
    memo[n] = value;
  }

  return value;
}