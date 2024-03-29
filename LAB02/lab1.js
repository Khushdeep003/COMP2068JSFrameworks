const prompt = require('prompt');

// Welcoming message for the user
console.log("Welcome to the game of Rock, Paper and Scissors by khushdeep chilotra.");

// Defining an array containing the available options for the game
const options = ['ROCK', 'PAPER', 'SCISSORS'];

// Function to get the choice of the user
function getUserChoice() {
    
    prompt.get(['userChoice'], function (err, result) {
        // Handlling any errors that may occur during input
        if (err) { 
            // Printing the error message
            return console.error(err); 
        }

        // Extracting the users selection from the result and convert it to uppercase
        const userChoice = result.userChoice.toUpperCase();
        
    
        if (!options.includes(userChoice)) {
            // If the users input is not one of the valid options, user will asked again to prompt again
            console.log("Invalid input. Please enter ROCK, PAPER, or SCISSORS.");
            getUserChoice();
        } else {
            // If the users input is valid, proceed to generate the computers selection
            console.log("User selected: " + userChoice);
            generateComputerChoice(userChoice);
        }
    });
}

// Function to get the computer's selection
function generateComputerChoice(userChoice) {
    // Generating a random number between 0 and 1 from computer
    const random = Math.random();

    let computerChoice;

    // Determining the computers selection based on the random number generated by the computer
    if (random >= 0 && random <= 0.34) {
        computerChoice = 'PAPER';
    } else if (random > 0.34 && random <= 0.67) {
        computerChoice = 'SCISSORS';
    } else {
        computerChoice = 'ROCK';
    }

    // Printing the computers selection
    console.log("Computer selected: " + computerChoice);
    // After generating the computers selection, proceed to determining the winner
    determineWinner(userChoice, computerChoice);
}

// Function to declare the winner of the game using switch statement
function determineWinner(userChoice, computerChoice) {
   
    let outcome;

    // Determining the outcome based on the users and computers selections using switch statement
    switch(userChoice) {
        case 'ROCK':
            switch(computerChoice) {
                case 'ROCK':
                    outcome = "It's a tie";
                    break;
                case 'PAPER':
                    outcome = "Computer Wins";
                    break;
                case 'SCISSORS':
                    outcome = "User Wins";
                    break;
            }
            break;
        case 'PAPER':
            switch(computerChoice) {
                case 'ROCK':
                    outcome = "User Wins";
                    break;
                case 'PAPER':
                    outcome = "It's a tie";
                    break;
                case 'SCISSORS':
                    outcome = "Computer Wins";
                    break;
            }
            break;
        case 'SCISSORS':
            switch(computerChoice) {
                case 'ROCK':
                    outcome = "Computer Wins";
                    break;
                case 'PAPER':
                    outcome = "User Wins";
                    break;
                case 'SCISSORS':
                    outcome = "It's a tie";
                    break;
            }
            break;
    }

    // Printing the outcome of the game
    console.log(outcome);
}

// Starting the game by prompting the user for their input
prompt.start();
getUserChoice();