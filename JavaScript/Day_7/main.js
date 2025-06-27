function funcA(m, n) {
  return m * n;
}

function funB(m, n) {
  return funcA(m, n);
}

function getResult(num1, num2) {
  return funB(num1, num2);
}

var ans = getResult(5, 6);

console.log(ans);
