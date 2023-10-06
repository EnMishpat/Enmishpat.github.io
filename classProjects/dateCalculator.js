// setting variables for inital values
let firstDateInput = document.getElementById('firstDate');
let secondDateInput = document.getElementById('secondDate');
let years = document.getElementById('years');
let months = document.getElementById('months');
let days = document.getElementById('days');



function showDates(){
    // turn dates into numeric values 
    let firstDateValue = new Date(firstDateInput.value);
    let secondDateValue = new Date(secondDateInput.value);
    let firstDateMil = firstDateValue.getTime();
    let secondDateMil =secondDateValue.getTime();
    let calculatedDif = secondDateMil - firstDateMil;
    alert(calculatedDif/1000/60/60/24/30);
};
