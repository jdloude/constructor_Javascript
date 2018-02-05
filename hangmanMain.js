var game = require("./hangman.js");
var wordCons = require("./word.js");
var letterCons = require("./letterdash.js");
var inquirer = require("inquirer");
var randomWord = game.randomWord;
var letterGuessed;
exports.letter;

var wordToGuess = new wordCons.wordCons(randomWord);
var numberOfGuesses = 18;
var guessesLeft = numberOfGuesses;

function startGame() {
    if (guessesLeft === 18) {
        console.log('------Start Game------\n------The subject is Anime------\n')
        console.log(wordToGuess.toString() + '\n');
    } else {
        console.log(wordToGuess.toString() + '\n');
    }
    inquirer.prompt([{
        name: 'letter',
        type: 'text',
        message: 'Enter a letter:',
        validate: function(str) {
            var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
            return regEx.test(str);
        }
    }]).then(function(letterInput) {
        var letter = letterInput.letter;
        wordToGuess.findLetter(letter);
        guessesLeft--;
        if (wordToGuess.guessesMade.length >= numberOfGuesses) {
            console.log('---------------------\n\nIm sorry you lost :(\n\n------End Game------\n');
            return;
        }
        if (wordToGuess.isComplete()) {
            console.log('Congrats! You got it right! The word was ' + wordToGuess.toString() + '!\n');
            return;
        }
        console.log('---------------------\nYou have ' + (numberOfGuesses - wordToGuess.guessesMade.length) + ' guesses left.\n')
        if (guessesLeft === 0) {
            inquirer.prompt([{
                name: 'endGame',
                type: 'confirm',
                message: 'Would you like to play again?:'
            }]).then(function(answer) {
                if (answer.endGame === true) {
                    // starts new match with the same players
                    startGame();
                } else {
                    console.log("Come back again soon!");
                }
            });
        }
        startGame();
    });
}

startGame(); //Start Game