function calculateSum() {
      const input = document.getElementById('numbersInput').value;
      const numbersArray = input.split(',').map(num => parseFloat(num.trim()));
      const sum = numbersArray.reduce((acc, current) => acc + current, 0);
      alert("The sum of the array is: " + sum);
    }