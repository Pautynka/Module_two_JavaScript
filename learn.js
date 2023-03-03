"use strict"
let money=55000;
let  profit ='фриланс';
let expenses = 'питание, проезд, развлечения';
let purpose = 100000;
let period = 6;
console.log(money,profit,expenses,purpose,period);
console.log(typeof money, 'money');
console.log(typeof profit, 'profit');
console.log(expenses.length,'expenses')
console.log('Период равен '+ period +' месяцев')
console.log('Цель заработать '+ purpose + ' рублей')
let budgetDay = money/30;
console.log(budgetDay);