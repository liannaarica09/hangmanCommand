var letter = module.require("./letter.js");

console.log(letter);

function Word(letters) {
    this.letters = letters;
}

Word.displayWord.toString = function () {
    for (i = 0; i < Word.letters.length; i++) {

    }
};
Word.check = function (input) {
    letter.checkCharacter(input);
};