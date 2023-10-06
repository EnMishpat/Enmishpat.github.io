const sum = require("./calculateSum");
let paycheck1 = 1500;
let paycheck2 = 1700;
let monthlyIncome = sum.calculateSum(paycheck1, paycheck2);
console.log(`My monthly income is ${monthlyIncome}`);