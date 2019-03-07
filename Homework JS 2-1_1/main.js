"use strict";
 
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;
 
    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}
 
function calculateTotalMortgage(percent, contribution, amount, date) {
    let percentNum;
    percentNum = (Number) (percent);
    
    if (isNaN(percentNum)){
      return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    }
    
    let contributionNum;
    contributionNum = (Number) (contribution);
    
    if (isNaN(contributionNum)){
      return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
    }
    
    let amountNum;
    amountNum = (Number) (amount);
    
    if (isNaN(amountNum)){
      return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
    }
    
    let period = monthDiff(date);
    console.log(period);
    let p = percentNum/1200;
    console.log(p);
    console.log(Math.pow((1+p),period));
    console.log(p/((1+p)^period));
    let creditSum = amountNum - contributionNum;
    let credit = creditSum*(p+p/((Math.pow((1+p),period))-1))*period; 
    return credit;
    // код для задачи №1 писать здесь
    //return totalAmount;
}
 
function monthDiff(d1) {
    let now = new Date();
    let dateYear = (Number)(d1.toString().substring(0, 4));
    let dateMonth = (Number)(d1.toString().substring(5, 7));
    
    return (((Number)(dateYear - now.getFullYear()))*12+(Number)(dateMonth - now.getMonth()-1));
    
}