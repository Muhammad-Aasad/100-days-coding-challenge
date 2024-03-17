//Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
var ChangingGuest = ["Asad", "Saad", "Awais"];
var unableToAttend = "Awais";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Wasif";
ChangingGuest[ChangingGuest.indexOf(unableToAttend)] = newGuest;
// New invitations
ChangingGuest.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
