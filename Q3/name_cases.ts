// Store the person's name in a variable
const personName: string = "Roman";

// Print the name in lowercase
console.log(`Lowercase: ${personName.toLowerCase()}`);

// Print the name in uppercase
console.log(`Uppercase: ${personName.toUpperCase()}`);

// Print the name in titlecase
function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

console.log(`Titlecase: ${toTitleCase(personName)}`);
