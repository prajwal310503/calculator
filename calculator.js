function Calculate(operator) {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    console.log(operator);
  
    switch (operator) {
      case "+": {
        let ans = num1 + num2;
        document.getElementById("answer").innerText = "Addition is: " + ans;
      }
      break;
      case "-": {
        let ans = num1 - num2;
        document.getElementById("answer").innerText = "Subtraction is: " + ans;
      }
      break;
      case "*": {
        let ans = num1 * num2;
        document.getElementById("answer").innerText = "Multiplication is: " + ans;
      }
      break;
      case "/": {
        let ans = num1 / num2;
        document.getElementById("answer").innerText = "Division is: " + ans;
      }
      break;
      default: {
        document.getElementById("answer").innerText = "Invalid operator ";
      }
    }
  }