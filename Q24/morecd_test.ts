// Equality and inequality with strings
let fruit: string = 'apple';

// Test 11: Check if fruit is equal to 'banana'
console.log("Is fruit == 'banana'? I predict False.");
console.log(fruit === 'banana'); // False

// Test 12: Check if fruit is not equal to 'orange'
console.log("Is fruit != 'orange'? I predict True.");
console.log(fruit !== 'orange'); // True

// Lowercase function test
let text: string = 'Hello World';

// Test 13: Check if text in lowercase is 'hello world'
console.log("Is text in lowercase 'hello world'? I predict False.");
console.log(text.toLowerCase() === 'hello world'); // False

// Numerical tests
let num1: number = 10;
let num2: number = 5;

// Test 14: Check if num1 is greater than num2
console.log("Is num1 > num2? I predict True.");
console.log(num1 > num2); // True

// Test 15: Check if num1 is less than or equal to num2
console.log("Is num1 <= num2? I predict False.");
console.log(num1 <= num2); // False

// Logical operators
let isSunny: boolean = true;
let isWarm: boolean = true;

// Test 16: Check if it's sunny and warm
console.log("Is it sunny and warm? I predict True.");
console.log(isSunny && isWarm); // True

// Test 17: Check if it's sunny or warm
console.log("Is it sunny or warm? I predict True.");
console.log(isSunny || isWarm); // True

// Array tests
let colors: string[] = ['red', 'green', 'blue'];

// Test 18: Check if 'green' is in the colors array
console.log("Is 'green' in the colors array? I predict True.");
console.log(colors.includes('green')); // True

// Test 19: Check if 'yellow' is not in the colors array
console.log("Is 'yellow' not in the colors array? I predict True.");
console.log(!colors.includes('yellow')); // True
