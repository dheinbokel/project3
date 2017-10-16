/**
 *   @author Heinbokel, Doug (dheinbokel@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Weeks 3+4 project 2 Drive-Right || created: 10.6.2017
 *   @todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');

let quit;
let movieRating, error, totalStars, totalRatings, avgRating, continueRating;
const MAX_ATTEMPT = 3;

/**
 *   @method
 *   @desc dispatch method for this project
 *   @returns (null)
 */
function main() {

    setContinue();
    while(continueRating === 1) {
        setTotalStars();
        setTotalRatings();
        setError();
        setQuit();
        rateMovies();

        if (error < MAX_ATTEMPT) {
            setAverageRating();
            displayRating();

        }
        else {
            return main();
        }
        setContinueRating();
    }
}
main();

/**
 *   @method
 *   @desc Asks the user for a rating for a movie.  The user can enter a number between 0 and 5 or they can
 *         press 'q' to quit the program.  If there are 3 mistakes without a correct input, the function calls main
 *         and restarts the program.
 *   @returns (null)
 */
function rateMovies() {

    while (quit !== "q"){
        movieRating = PROMPT.question("\nWhat rating would you like to give? (0 - 5 or q to quit) ");
        if(movieRating >= 0 && movieRating <= 5){
            console.log(`\nThis movie has been rated ${movieRating} stars.`);
            totalStars += parseInt(movieRating);
            totalRatings++;
            error = 0;
        }
        else if(movieRating === "q"){
            quit = "q";
        }
        else{
            console.log(`\nInvalid choice, please try again.`)
            error++;
            if(error >= MAX_ATTEMPT){
                console.log(`\nThree strikes and you're out!`);
                console.log(`\nStarting over!`);
                break;
            }
        }

    }
}

/**
 *   @method
 *   @desc Initializes the error variable to 0
 *   @returns (null)
 */
function setError() {
    error = 0;
}

/**
 *   @method
 *   @desc Initializes the totalStars variable to 0
 *   @returns (null)
 */
function setTotalStars() {
    totalStars = 0;
}

/**
 *   @method
 *   @desc Initializes the totalRatings variable to 0
 *   @returns (null)
 */
function setTotalRatings() {
    totalRatings = 0;
}

/**
 *   @method
 *   @desc Sets avgRating to totalStars divided by totalRatings
 *   @returns (null)
 */
function setAverageRating() {
    avgRating = (totalStars/totalRatings);
}

/**
 *   @method
 *   @desc Displays the average rating for the movie
 *   @returns (null)
 */
function displayRating() {
    console.log(`\nThis movie has been rated an average of ${avgRating} stars.`)
}

/**
 *   @method
 *   @desc Asks the user for a 0 or 1 to set the continueRating variable.  If it is less than 0 or more than one or not a number
 *         then the function starts over.  If it succeeds then it lets the number go through.
 *   @returns (null)
 */
function setContinueRating() {
    continueRating = Number(PROMPT.question("\nWould you like to rate again? (Type 0 for no, 1 for yes)"));
    if (continueRating > 1 || continueRating < 0 || isNaN(continueRating)){
        console.log('\nInvalid response.');
        return setContinueRating();
    }
    else{

    }
}

/**
 *   @method
 *   @desc Initializes continueRating to 1 to let the first loop start.
 *   @returns (null)
 */
function setContinue() {
    continueRating = 1;
}

/**
 *   @method
 *   @desc Sets quit to 'x' so that when the loop starts over, it doesn't quit right away.
 *   @returns (null)
 */
function setQuit() {
    quit = "x";
}