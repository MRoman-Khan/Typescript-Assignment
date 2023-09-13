var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define an array of places you'd like to visit
var placesToVisit = [
    "Tokyo",
    "Paris",
    "New York",
    "Dublin",
    "Sydney",
];
// Print the array in its original order
console.log("Original Order:", placesToVisit);
// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical Order:", __spreadArray([], placesToVisit, true).sort());
// Show that the original array is still in its original order
console.log("Original Order (unchanged):", placesToVisit);
// Print the array in reverse alphabetical order without changing the original order
console.log("Reverse Alphabetical Order:", __spreadArray([], placesToVisit, true).sort().reverse());
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
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
// Print the array to show its order has been changed
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
