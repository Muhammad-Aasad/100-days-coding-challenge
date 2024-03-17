//Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.

let ChangingGuest: string[] = ["Asad", "Saad", "Awais"];

let unableToAttend = "Awais";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Wasif";
ChangingGuest[ChangingGuest.indexOf(unableToAttend)] = newGuest;

// New invitations
ChangingGuest.forEach((guest) => {
  console.log(`Dear ${guest}, would you like to join me for dinner?`);
<<<<<<< HEAD
});
=======
});
>>>>>>> a6acc930ac4b9d568b6126dc20e359c2ed9f3033
