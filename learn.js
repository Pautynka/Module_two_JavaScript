let money, expenses, amount, deposit, purpose, budgetDay, dayForPurpose, extraMoney,accumulatedIncome;
purpose = Number(prompt('Какую сумму вы хотите накопить?', 1000));
money = Number(prompt('Ваш месячный доход?', 1000));
expenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?', 'проезд');
extraMoney = Number(prompt('Перечислите возможный доход за ваши дополнительные работы:', '1000'));
amount = Number(prompt('Во сколько обойдуться обязательные статьи расходов?', 10));
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


console.log(accumulatedIncome);
console.log('Ваш бюджет на месяц с учетом ваших расходов составляет: ', getAccumulatedIncome());
console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через`, getTargetMonth() + ' месяца');
console.log('Дневной бюджет', budgetDay);

