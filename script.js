'use strict';

let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

let appData = {
    "бюджет": money,
    "timeData": time,
    "expenses": {},
    "optionalExpenses": {},
    "income": [],
    "saving": false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a2 = prompt("Во сколько обойдется?", ''),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a4 = prompt("Во сколько обойдется?", '');
appData.expenses[a1] = a2;
appData.expenses[a3] = a4;

alert(appData.бюджет / 30);

console.log(JSON.stringify(appData, 0, 2));
