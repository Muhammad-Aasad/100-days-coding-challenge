//Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let Book : {title: string;author: string, yearpublish: number}={
    title:"The hobbit ",
    author: "J.R.R Tolkien",
    yearpublish :1937,
};
console.log(`Book Info: ${Book.title}by ${Book.author},publish in ${Book.yearpublish}`);