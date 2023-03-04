let money, expenses, amount, deposit, purpose, budgetMonth, budgetDay, dayForPurpose;
money = prompt('Ваш месячный доход?', 1);
expenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?', 'проезд');
amount = prompt('Во сколько обойдуться обязательные статьи расходов?', 1);
deposit = confirm("Есть ли у вас вклад в банке?");
budgetMonth = Number(money) - Number(amount);
purpose = 100000;
dayForPurpose = Math.ceil(Number(purpose)/Number(budgetMonth));
budgetDay = Math.floor(Number(budgetMonth)/30);


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


console.log(money);
console.log(expenses);
console.log(amount);
console.log(deposit);
console.log(purpose);
console.log(budgetMonth);
console.log(budgetDay);
console.log(dayForPurpose);
