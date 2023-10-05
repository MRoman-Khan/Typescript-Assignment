let car: string = 'subaru';

// Test 1: Check if car is equal to 'subaru'
console.log("Is car == 'subaru'? I predict True.");
console.log(car === 'subaru'); // True

// Test 2: Check if car is not equal to 'honda'
console.log("Is car != 'honda'? I predict True.");
console.log(car !== 'honda'); // True

// Test 3: Check if car is equal to 'toyota'
console.log("Is car == 'toyota'? I predict False.");
console.log(car === 'toyota'); // False

// Test 4: Check if car is not equal to 'subaru'
console.log("Is car != 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False

// Test 5: Check if car starts with the letter 's'
console.log("Does car start with 's'? I predict True.");
console.log(car.startsWith('s')); // True

// Test 6: Check if car includes the letter 'u'
console.log("Does car include 'u'? I predict True.");
console.log(car.includes('u')); // True

// Test 7: Check if car ends with the letter 'o'
console.log("Does car end with 'o'? I predict False.");
console.log(car.endsWith('o')); // False

// Test 8: Check if car length is greater than 5
console.log("Is the length of car > 5? I predict False.");
console.log(car.length > 5); // False

// Test 9: Check if car is empty (has zero length)
console.log("Is car empty? I predict False.");
console.log(car.length === 0); // False

// Test 10: Check if car is not undefined
console.log("Is car defined? I predict True.");
console.log(car !== undefined); // True
