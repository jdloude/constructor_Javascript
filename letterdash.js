//Shows the string as dashes unless a letter is correctly picked then it shows the letter.
function Letter(value) {
    this.value = value;
    this.show = false;
    if (this.value == ' ')
        this.show = true;
}

Letter.prototype.printInfo = function() {
    if (this.show) {
        return this.value;
    }
    return "_ ";
}
exports.letter = Letter;