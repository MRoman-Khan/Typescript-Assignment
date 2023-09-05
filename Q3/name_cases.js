// Store the person's name in a variable
var personName = "Roman";
// Print the name in lowercase
console.log("Lowercase: ".concat(personName.toLowerCase()));
// Print the name in uppercase
console.log("Uppercase: ".concat(personName.toUpperCase()));
// Print the name in titlecase
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
console.log("Titlecase: ".concat(toTitleCase(personName)));
