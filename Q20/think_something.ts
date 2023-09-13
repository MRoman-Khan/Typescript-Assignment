// Create an array to store a list of countries
const countries: string[] = [
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
countries.forEach((country, index) => {
  console.log(`${index + 1}. ${country}`);
});
