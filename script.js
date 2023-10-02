const calculate = () => {
  const symbol = document.getElementById("operator-select").value;
  const num1 = parseFloat(document.querySelector(".num1").value);
  const num2 = parseFloat(document.querySelector(".num2").value);
  let result = 0;

  switch (symbol) {
    case "add":
      result = num1 + num2;
      break;
    case "substruct":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Division by zero is not allowed";
      }
      break;
    default:
      result = "Invalid symbol";
  }

  document.querySelector(".result").innerText = `Result: ${result}`;

  console.log(result);
  return result;
};

const calculateButton = document.querySelector("button");
calculateButton.addEventListener("click", calculate);
