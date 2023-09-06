// Define an array called 'guests' to store the names of people you'd like to invite
var guests = [
    "Ali",
    "Waqas",
    "Zuhaib",
    "Zeeshan",
    "Kamran",
    "Roman",
    "Ihsan"
];
// Print a message saying you can only invite two people for dinner
console.log("Unfortunately, the new dinner table won't arrive in time, and I can only invite two people for dinner.");
// Remove guests one at a time until only two names remain
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
// Print a message to the two people still on your list, letting them know they're still invited
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
}
// Remove the last two names from your list to have an empty list
guests.splice(0, guests.length);
// Print the empty list to confirm it's empty
console.log("My guest list is now empty:", guests);
