"use strickt"
let money, expenses, amount, deposit, purpose, budgetDay, dayForPurpose, extraMoney,accumulatedIncome;
purpose = prompt('Какую сумму вы хотите накопить?', 1000);
while (!checkNum(purpose)) {
    alert("Введите число!");
    purpose = prompt('Какую сумму вы хотите накопить?', 1000);
}
purpose = Number(purpose);
money = prompt('Ваш месячный доход?', 1000);
while (!checkNum(money)) {
    alert("Введите число!");
    money = prompt('Ваш месячный доход?', 1000);
}
money = Number(money);
expenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?', 'проезд');
extraMoney = prompt('Перечислите возможный доход за ваши дополнительные работы:', '1000');
while (!checkNum(extraMoney)) {
    alert("Введите число!");
    extraMoney = prompt('Перечислите возможный доход за ваши дополнительные работы:', '1000');
}
extraMoney = Number(extraMoney);
amount = prompt('Во сколько обойдуться обязательные статьи расходов?', 10);
while (!checkNum(amount)) {
    alert("Введите число!");
    amount = prompt('Во сколько обойдуться обязательные статьи расходов?', 10);
}
amount = Number(amount);
deposit = confirm("Есть ли у вас вклад в банке?");
accumulatedIncome = getAccumulatedIncome(money,extraMoney,amount);
dayForPurpose = Math.ceil(Number(purpose)/Number(accumulatedIncome));
budgetDay = Math.floor(Number(accumulatedIncome)/30);

if (budgetDay > 0) {
    if (budgetDay > 6000) {
        alert( 'У вас высокий уровень дохода' );
    } else if (budgetDay < 6000 && budgetDay > 3000) {
        alert( 'У вас средний уровень дохода' );
    } else if (budgetDay < 3000){
        alert( 'К сожалению у вас уровень дохода ниже среднего' );
    }
} else {
    alert( 'Что-то пошло не так' );
}

function getAccumulatedIncome () {
   return money + extraMoney - amount;
}
function getTargetMonth() {
    return Math.ceil(purpose/accumulatedIncome);
}
function checkNum(n) {
    var num = /^[0-9]+$/;
    return num.test(n);
}
let targetMonth = getTargetMonth();

console.log('Ваш бюджет на месяц с учетом ваших расходов составляет: ', getAccumulatedIncome());
if (targetMonth > 0) {
    console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через`, + targetMonth + ' месяца');
} else {
    console.log(`Ваша цель накопить ${purpose} к сожелению недосягаема!`);
}
console.log('Дневной бюджет', budgetDay);

