const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let orderNumber = prompt("Скока дроидов те надо подкинуть?");
if (orderNumber === null) {
  totalPrice = "Отменено пользователем!";
  console.log(totalPrice);
} else {
  orderNumber = Number(orderNumber);
  totalPrice = orderNumber * pricePerDroid;
  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    const different = credits - totalPrice;
    console.log(
      `Вы купили ${orderNumber} дроидов, на счету осталось ${different} кредитов.`
    );
  }
}
