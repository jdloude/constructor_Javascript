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
            console.log('---------------------\nIm sorry you lost :(\n------End Game------n');
            return;
        }
        if (wordToGuess.isComplete()) {
            console.log('Congrats! You got it right! The word was ' + wordToGuess.toString() + '!\n');
            return;
        }
        console.log('---------------------\nYou have ' + (numberOfGuesses - wordToGuess.guessesMade.length) + ' guesses left.\n')
        startGame();
    });
}

startGame(); //Start Game