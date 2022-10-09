function funcSum(num1) { 
 
  return function funcSum2(num2) {
    return console.log(num1+num2);
  }
}

funcSum(7)(15)

