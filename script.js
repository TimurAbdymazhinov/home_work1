'use strict';


var money = prompt("Ваш бюджет на месяц?", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "");


var q1 = prompt("Введите обязательную статью расходов в этом месяце", "");
var q2 = prompt("Во сколько обойдется?");

var expenses ={
    q1 : q2
};


var appData = {
    budget : money,
    time : time,
    expenses : {},
    income : [],
    savings : false
};

alert(+appData.budget / 30);

console.log(+appData.budget / 30);

