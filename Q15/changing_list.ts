// Define an array called 'guests' to store the names of people you'd like to invite
let guests = ["Ali", "Waqas", "Zuhaib"];

// Print the name of the guest who can't make it
const guestWhoCantMakeIt = "Ali";
console.log(`${guestWhoCantMakeIt} can't make it to dinner.`);

// Replace the guest who can't make it with a new person
const newGuest = "Zuhaib";
guests = guests.map(guest => (guest === guestWhoCantMakeIt ? newGuest : guest));

// Print a second set of invitation messages for the remaining guests
for (const guest of guests) {
  console.log(`Dear ${guest}, I would like to invite you to dinner. It would be an honor to have you as my guest.`);
}
