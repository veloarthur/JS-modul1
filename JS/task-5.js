const country1 = "Китай";
const country2 = "Чили";
const country3 = "Австралия";
const country4 = "Индия";
const country5 = "Ямайка";
let userCountry = prompt(" напишите вашу страну ");
let x = userCountry.toLowerCase();
let y = x[0].toUpperCase() + x.substring(1);
switch (y) {
  case country1: {
    console.log(`Доставка в ${country1} будет стоить 100 кредитов`);
    break;
  }
  case country2: {
    console.log(`Доставка в ${country2} будет стоить 250 кредитов`);
    break;
  }
  case country3: {
    console.log(`Доставка в ${country3} будет стоить 170 кредитов`);
    break;
  }
  case country4: {
    console.log(`Доставка в ${country4} будет стоить 80 кредитов`);
    break;
  }
  case country5: {
    console.log(`Доставка в ${country5} будет стоить 120 кредитов`);
    break;
  }
  default:
    console.log("В вашей стране доставка не доступна");
}
