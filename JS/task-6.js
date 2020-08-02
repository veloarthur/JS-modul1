let total = 0;
let value;
do {
  value = prompt("Please enter a number!");
  if (value === null) {
    break;
  } else if (Number.isNaN(Number(value))) {
    alert("Было введено не число, попробуйте еще раз");
    value = 0;
  }
  value = Number(value);
  total = total + value;
} while (value !== Infinity);
alert(`Общая сумма чисел равна ${total}`);
