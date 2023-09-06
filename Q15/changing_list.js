// Define an array called 'guests' to store the names of people you'd like to invite
var guests = ["Ali", "Waqas", "Zuhaib"];
// Print the name of the guest who can't make it
var guestWhoCantMakeIt = "Ali";
console.log("".concat(guestWhoCantMakeIt, " can't make it to dinner."));
// Replace the guest who can't make it with a new person
var newGuest = "Zuhaib";
guests = guests.map(function (guest) { return (guest === guestWhoCantMakeIt ? newGuest : guest); });
// Print a second set of invitation messages for the remaining guests
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner. It would be an honor to have you as my guest."));
}
