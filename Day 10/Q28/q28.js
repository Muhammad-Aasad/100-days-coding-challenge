"use strict";
//Stages of Life: Determine a person’s life stage with an if-else chain.
//Explain & TIP:*** Use age to check the life stage. This practice shows how to handle multiple conditions with an if-else chain ***
let age = 19;
if (age < 2) {
    console.log("The Person is baby.");
}
else if (age < 4) {
    console.log("The Person is toodler.");
}
else if (age < 13) {
    console.log("Ther person is kid.");
}
else if (age < 20) {
    console.log("The person is Teenager.");
}
else if (age < 65) {
    console.log("The Perosn is adult");
}
else {
    console.log("The Person is elder");
}
