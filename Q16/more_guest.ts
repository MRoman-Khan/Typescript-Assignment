// Define an array called 'guests' to store the names of people you'd like to invite
let guests = ["Ali", "Waqas", "Zuhaib", "Roman"];

// Print a message about the bigger dinner table
console.log("Good news! I found a bigger dinner table.");

// Add one new guest to the beginning of your array
guests.unshift("Zeeshan");

// Add one new guest to the middle of your array
const middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Ihsan");

// Use push() to add one new guest to the end of your list
guests.push("Kamran");

// Print a new set of invitation messages for all the guests
for (const guest of guests) {
  console.log(`Dear ${guest}, I would like to invite you to dinner. It would be an honor to have you as my guest.`);
}
