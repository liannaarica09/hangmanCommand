var words = ["scifi", "fan fiction", "tumblr", "cosplay", "podcast", "comic book", "super hero", "steampunk", "DC Comics", "trading cards", "collectable", "action figure"];
var doctorWho = ["Fantastic", "Brilliant", "Geronimo", "Rose Tyler", "Mickey Smith", "Jackie Tyler", "Dalek", "Skaro", "Fantastic", "Sarah Jane", "Jack Harkness", "Torchwood", "TARDIS", "Ian", "Barbra", "Susan", "Polly"];
var starWars = ["X Wing", "Deathstar", "Luke Skywalker", "Rebel Alliance", "Rogue Squadron", "Leia Organa", "Han Solo", "Chewbacca", "Millennium Falcon", "Curuscant", "Tatooine", "Naboo", "Anakin Skywalker", "Yoda", "Obi Wan Kenobi", "Qui Gon Jinn", "Mace Windu", "lightsaber"];
var starTrek = ["Enterprise", "James", "Tibberious", "Kirk", "Jean Luc", "Picard", "William Riker", "Data", "Deanna Troi", "Worf", "Hikaru Sulu", "Montgomery Scott", "Uhura", "Spock", "Vulcan", "Federation"];
var harryPotter = ["Harry Potter", "Hermione Granger", "Ron Weasley", "PotterCast", "Diagon Alley", "Hogwarts", "Gryffindor", "Hufflepuff", "Slytherin", "Ravenclaw", "Dumbledore", "Remus Lupin", "Sirius Black", "Salazar", "Godric", "Helga", "Rowena", "Niffler", "Dementor", "Luna Lovegood", "Daily Prophet", "Quibbler", "Welsh Green", "Hungarian Horntail", "Norwegian Ridgeback", "Voldemort", "Death Eater", "Auror", "Nymphadora Tonks"];
var lotr = ["Middle Earth", "Hobbit", "Hobbiton", "Bree", "Rivendell", "Rohon", "Edoras", "Gondor", "Dol Amroth", "Minas Tirith", "Minas Arnor", "Ithilien", "Treebeard", "Aragorn", "Boromir", "Faramir", "Frodo Baggins", "Bilbo Baggins", "Sam Gamgee", "Meridoc Brandybuck", "Perigrin Took", "Eomer", "Eowyn", "Legolas", "Gimli", "Ori", "Dori", "Nori", "Biffur", "Boffur", "Bonbor", "Oin", "Gloin", "Balin", "Dwalin", "Fili", "Kili", "Thorin Oakenshild", "Gandalf"];
var marvel = ["Tony Stark", "Iron Man", "James Rhodes", "Rhody", "War Machine", "Iron Patriot", "Pepper Potts", "Rescue", "Ho Yinsen", "Toni Ho", "Justin Hammer", "Captain America", "Union Jack", "Dum Dum Dugan", "Captain Britain", "Shadow Cat", "Black Knight", "Dane Whitman", "Pete Wisdom", "Captain Midlands", "Spitfire", "Excalibur", "Alister Stewart", "Hellcat", "Hawkeye", "Clint Barton", "Black Widow", "Avengers", "Young Avengers", "Assgaurdian", "Hulkling", "Iron Lad", "Patriot", "Wiccan", "Stature", "Speed", "Scarlet Witch", "Quicksilver", "Victor Mancha", "America Chavez", "Marvel Boy", "Loki", "Thor", "Volstag", "Sif", "Happy Hogan", "Hogan the Grim", "Excelsior", "Stan Lee", "Jack Kirby", "Joe Simon", "Chris Claremont", "Defenders", "Dr Strange", "Sorcerer Supreme", "The Collector", "Agent Phil Coulson", "Galaga", "shwarma", "Maria Hill", "Daisy Johnson", "Quake", "Professor X", "Hulk", "Bruce Banner", "Amadeus Cho", "Patsy Walker", "Tippy Toe", "Steve Rogers", "Bucky", "James Buchanan Barnes", "Winter Soldier", "Peggy Carter", "Hela", "Merlin", "Jessica Jones", "Luke Cage", "Iron Fist", "Daredevil", "Spider Man", "Peter Parker", "Miles Morales", "Wolverine", "Phoenix", "Kitty Pride", "Iceman", "Blink", "Warpath", "Dani Moonstar", "Valkyrie", "Prodigy", "Rogue", "Gambit", "Bullseye", "Thunderbird", "Magneto", "Mangog", "Galactus", "Black Panther", "Wakanda"];
var janeAusten = ["Emma", "Emma Woodhouse", "George Knightley", "John Knightley", "Isabella Knightley", "Pride and Prejudice", "Elizabeth Bennet", "Kitty Bennet", "Jane Bennet", "Bingley", "Darcy", "Sense and Sensibility", "Lizzie Bennet Diaries", "Emma Aproved"];
var hamilton = ["Alexander Hamilton", "George Washington", "Thomas Jefferson", "Aaron Burr", "Yorktown", "Virginia", "New York", "Eliza", "Angelica Schyler", "Philip", "Peggy", "Hercules Mulligan", "John Laurens", "Shot", "America", "immigrants", "write", "Lafayette", "wait for it", "fighting frenchman"];
var classicLit = ["Dracula", "Animal Farm", "Catcher in the Rye", "Shakespeare", "Much Ado About Nothing", "Hamlet", "McBeth", "Duncan", "Romeo and Juliet", "Troilus and Cressida", "Othello", "Julius Caesar", "Pericles", "Tempest", "Taming of the Shrew", "Les Miserables", "Frankenstein", "Great Expectations", "The Scarlet Letter", "Nineteen Eighty Four", "Odyssey", "Tom Sawyer", "Secret Garden", "Heart of Darkness", "Brave New World", "Study in Scarlet", "Black Beauty"];
var nerdfighteria = ["John Green", "World Suck", "Hank Green", "Nerd", "YouTube", "Dear Hank and John", "tuatara", "Turtles All the Way Down", "Paper Towns", "Looking for Alaska", "Hankler Fish", "spiral", "An Abundance of Kathrines", "An Absolutely Remarkable Thing", "Fault in Our Stars", "Ester Earl", "Hazel", "Aza Holmes", "Maureen Johnson"];
var disney = ["Rapunzel", "Cinderella", "Aurora", "Sleeping Beauty", "Belle", "Lion King", "Simba", "Nala", "Tarzan", "Dalmatian", "Cruela Devill", "Maleficent", "Ariel", "Merida", "Brave", "Tangled", "Flynn Rider", "Woody", "Buzz Lightyear", "Incredibles", "Dumbo", "Snow White", "Mickey", "mouse", "Goofy", "Donald Duck", "Duck Tales", "Tiana", "Scar", "Prince Eric", "Mulan", "Belle", "Ariel", "Aladdin", "Jasmine"];

var inquirer = require('inquirer');
var word = require('./word.js');
var wordArry = [];
var wordChoice = "";

function choseList() {
    inquirer.prompt([{
        type: "list",
        name: "choseList",
        message: "Chose your Fandom:",
        choices: ["Doctor Who", "Star Wars", "Star Trek", "Harry Potter", "Lord of the Rings", "Marvel", "Jane Austen", "Hamilton", "Classic Literature", "Nerdfighteria", "Disney", "Miscellaneous"]
    }]).then(data => {
        switch (data.choseList) {
            case "Doctor Who":
                wordArry = doctorWho;
                break;
            case "Star Wars":
                wordArry = starWars;
                break;
            case "Star Trek":
                wordArry = starTrek;
                break;
            case "Harry Potter":
                wordArry = harryPotter;
                break;
            case "Lord of the Rings":
                wordArry = lotr;
                break;
            case "Marvel":
                wordArry = marvel;
                break;
            case "Jane Austen":
                wordArry = janeAusten;
                break;
            case "Hamilton":
                wordArry = hamilton;
                break;
            case "Classic Literature":
                wordArry = classicLit;
                break;
            case "Nerdfighteria":
                wordArry = nerdfighteria;
                break;
            case "Disney":
                wordArry = disney;
                break;
            case "Miscellaneous":
                wordArry = words;
                break;
            default:
                wordArry = words;
        }
        // console.log(wordArry);
        choseWord();
    });
}

function choseWord() {
    wordChoice = wordArry[Math.floor(Math.random() * wordArry.length)];
}

function guessRepeat() {}

function winCheck() {}

function reset() {}

choseList();