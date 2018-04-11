module.exports = Letter;

function Letter(character, guessed) {
    this.character = character.toLowerCase();
    this.guessed = false;
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
        console.log("true");
        return true;
    }
};