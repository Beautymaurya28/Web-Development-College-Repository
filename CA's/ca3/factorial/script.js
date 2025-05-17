const numberInput = document.getElementById("numberInput");
const resultText = document.getElementById("resultText");

numberInput.addEventListener("input", () => {
  const number = parseInt(numberInput.value);
  if (isNaN(number) || number < 0) {
    resultText.textContent = "Please enter a valid non-negative integer!";
    resultText.classList.remove("show-result");
    resultText.classList.add("hide-result");
  } else {
    resultText.textContent = `Factorial of ${number} is ${factorial(number)}`;
    resultText.classList.remove("hide-result");
    resultText.classList.add("show-result");
  }
});

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
