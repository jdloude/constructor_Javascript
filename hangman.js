//Random word is selected and exported
var wordsArry = ["Big O", "One Piece", "No Game No Life", "Psycho Pass", "Inuyasha", "Trigun", "Samurai Champloo", "Fairy Tail"];
var randomIndex = Math.floor(Math.random() * wordsArry.length);
var randomWord = wordsArry[randomIndex];
exports.randomWord = randomWord;