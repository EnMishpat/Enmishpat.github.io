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
   // calculating the difference in years
    let yearDif = Math.round(calculatedDif/1000/60/60/24/365);
    // displaying the difference in years inside the paragraph
    years.innerText = yearDif;
    // calculating the difference in months
    let monthDif = Math.round(calculatedDif/1000/60/60/24/30);
    // displaying the difference in months inside the paragraph
    months.innerText = monthDif;
    // calculating the difference in days
    let daysDif = Math.round(calculatedDif/1000/60/60/24);
    // displaying the difference in days inside the paragraph
    days.innerText = daysDif;

   
};
