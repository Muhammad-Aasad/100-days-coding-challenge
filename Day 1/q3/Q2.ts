//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName : string = "muhammad Asad";

// Lower Case 
console.log(personName .toLocaleLowerCase());

// uppercase
console.log(personName.toLocaleUpperCase());

//titlecase\
console.log(personName.charAt(0).toLocaleUpperCase() + personName.slice(1,8));

