// Create an array to store a list of countries
var countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "France",
    "Germany",
    "Australia",
    // Add more countries as needed
];
// Print the list of countries
console.log("List of Countries:");
countries.forEach(function (country, index) {
    console.log("".concat(index + 1, ". ").concat(country));
});
