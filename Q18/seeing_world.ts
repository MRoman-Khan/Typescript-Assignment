// Define an array of places you'd like to visit
const placesToVisit: string[] = [
  "Tokyo",
  "Paris",
  "New York",
  "Dublin",
  "Sydney",
];

// Print the array in its original order
console.log("Original Order:", placesToVisit);

// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical Order:", [...placesToVisit].sort());

// Show that the original array is still in its original order
console.log("Original Order (unchanged):", placesToVisit);

// Print the array in reverse alphabetical order without changing the original order
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

// Show that the original array is still in its original order
console.log("Original Order (unchanged):", placesToVisit);

// Reverse the order of your list
placesToVisit.reverse();

// Print the array to show its order has changed
console.log("Reversed Order:", placesToVisit);

// Reverse the order of your list again
placesToVisit.reverse();

// Print the array to show it's back to its original order
console.log("Back to Original Order:", placesToVisit);

// Sort the array in alphabetical order (modifying the original list)
placesToVisit.sort();

// Print the array to show its order has been changed
console.log("Sorted in Alphabetical Order:", placesToVisit);

// Sort the array in reverse alphabetical order (modifying the original list)
placesToVisit.sort((a, b) => b.localeCompare(a));

// Print the array to show its order has been changed
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
