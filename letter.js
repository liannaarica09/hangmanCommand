function Letter(character, guessed) {
    this.character = character;
    this.guessed = guessed;
}

Letter.prototype.printCharacter = function () {
    if (this.guessed === true) {
        console.log(this.character);
        return this.character;
    } else {
        console.log("-");
        return "-";
    }
};
Letter.prototype.checkCharacter = function (guess) {
    if (guess === this.character) {
        this.guessed = true;
    }
};

var newLetter = new Letter("a", true);
console.log(newLetter.printCharacter());