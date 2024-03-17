//Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
console.log("Great news! I found a bigger dinner table!");

console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
  let removedGuest = guests.pop();
  console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach((guest) => {
  console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests); // Shows an empty list
