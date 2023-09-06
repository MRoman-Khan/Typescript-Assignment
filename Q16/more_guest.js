// Define an array called 'guests' to store the names of people you'd like to invite
var guests = ["Ali", "Waqas", "Zuhaib", "Roman"];
// Print a message about the bigger dinner table
console.log("Good news! I found a bigger dinner table.");
// Add one new guest to the beginning of your array
guests.unshift("Zeeshan");
// Add one new guest to the middle of your array
var middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Ihsan");
// Use push() to add one new guest to the end of your list
guests.push("Kamran");
// Print a new set of invitation messages for all the guests
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner. It would be an honor to have you as my guest."));
}
