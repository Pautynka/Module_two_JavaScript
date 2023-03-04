"use strict"
let salaries, studentScores, sum, student;
salaries= {John: 100,Ann: 160,Pete: 130};
sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum)
// Должно получиться 390
console.log('--------------------------------------------------');

studentScores = {Коля: '99',Вася: '35',Петя: '70',Таня: '95',Оля: '50',Саша: '20'}
student = {};
for (let key in studentScores) {
  // console.log(key)
    //console.log(studentScores[key]);
if (studentScores[key] < 80) {
    console.log('Студент ' + key + ' не проходит отбор')
} else {
    student[key] = studentScores[key];
}
}

console.log(student)

