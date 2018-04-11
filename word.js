var Letter = module.require("./letter.js");

function Word(word) {
    this.word = word;
    this.letters = [];
    for (var i = 0; i < word.length; i++) {
        this.letters.push(new Letter(this.word[i]));
    }
}

Word.prototype.displayWord = function () {
    var wordArry = [];
    for (i = 0; i < this.letters.length; i++) {
        wordArry.push(this.letters[i].printCharacter(this.letters[i]));
    }
    return wordArry;

};
Word.prototype.check = function (input) {
    var notPresent = true;
    for (i = 0; i < this.letters.length; i++) {
        if (this.letters[i].checkCharacter(input) === true) {
            console.log(this.letters[i]);
            this.letters[i].guessed = true;
            notPresent = false;
        }
    }
    if (notPresent == true) {
        console.log(input + " is not in this word.");
    }

};

var test = new Word("Test");