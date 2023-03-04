"use strict"
let week, today;
week = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
];
today = new Date();
today= today.getDay()-1;
for (let i = 0; i <= week.length-1; i++) {

    if (i==5 || i==6) {
        if(i==today){
            document.write('<strong><em>'+week[i]+'</em></strong><br>');
        } else {
            document.write('<strong>' + week[i] + '</strong><br>');
        }
    } else {
        if(i==today){
            document.write('<em>'+week[i]+'</em><br>');
        } else {
            document.write(week[i]+'<br>');
        }
    }
}

let arr, min, max, result, number;
arr = [];
min = 10; max = 100;

for (let i = 0; i<= 6; i++) {
    arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(arr);
for (let i = 0; i <= arr.length-1; i++) {
    number =arr[i];
    result = number.toString().split('');
        if (result[0] == 3 || result[0] == 7) {
           console.log(arr[i]);
        }
}

