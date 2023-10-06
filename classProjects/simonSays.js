// start the game

// create an array for the button values
let buttonArray = [1,2,3,4];
// create an array to contain the program chosen values 
let chosen = [];
// create an array to contain the users input values
let userInput = [];
// create a function using Math.floor(Math.random()*button.length) 
//      to generate the values that will fill the chosen array
function chooseMe(){
    let nextChosen = Math.floor(Math.random()*buttonArray.length);
Array.chosen.push(nextChosen)
}
// create a funtion to flash the chosen button

// create a function  simonSays to loop through the chose array and glass the buttons in order
//      using a time delay to give enough time for the flash to complete before moving to the next button
//      then choose another button at random, add push it into the chosen array and call the flash function

// create a function that will add user input values to the userInput array
function userInputs(){
    let youChose = document.addEventListener("onclick");
    // get the id of the button that the user clicked
    Array.userInput.push(youChose);
}

// create a funtion that will loop through the chose array and compare the index values to the userInput array
//      if the userInput[index].value == the chosen[index].value then it will go to the next one
//      if chosen == userInput call function simonSays
//      else the game will end and the chose and the userInput array will need to be emptied to start again
function didSimonSay(){
    for(i=0,i<chosen.length,i++){
        if{
            chosen[index] == userInput[index]    };
    }
}
