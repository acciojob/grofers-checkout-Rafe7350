
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Get the table element and querySelectorAll for item prices
  const table = document.querySelector('table');
  const prices = table.querySelectorAll('.price');

  let totalPrice = 0;
  prices.forEach(price => {
    // Convert price to number and add to totalPrice
    totalPrice += parseInt(price.textContent);
  });

  // Create a new row for total price
  const newRow = document.createElement('tr');
  newRow.innerHTML = `<td><strong>Total Price</strong></td><td><strong>${totalPrice}</strong></td>`;

  // Append the new row to the table
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
