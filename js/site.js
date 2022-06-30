
// Get values form
function getValues()
{
  // Get Values
  let startValue = parseInt(document.querySelector("#startValue").value);
  let endValue = parseInt(document.querySelector("#endValue").value);

  // Call Generate Numbers
  let numbers = generateNumbers(startValue, endValue);

  // Call Display Results
  displayResults(numbers);
}

// Generate numbers from start value to end value
function generateNumbers(startValue, endValue)
{
  let numbers = [];
  for (let index = startValue; index <= endValue; index++) {
    numbers.push(index);
  }
  return numbers;
}

// Display numbers and make even bold
function displayResults(numbers)
{
  let templateRows = "";
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number % 2 == 0){
      templateRows += `<tr><td><strong>${number}</strong></td></tr>`;
    } else {
      templateRows += `<tr><td>${number}</td></tr>`;
    }
  }
  document.getElementById("results").innerHTML = templateRows;
}