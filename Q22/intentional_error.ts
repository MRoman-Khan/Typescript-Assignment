// Create an array of fruits
const fruits: string[] = ["apple", "banana", "orange"];

// Attempt to access an element that is out of bounds (index 3)
const indexError = fruits[3]; // This will result in an "IndexError"

// Correct the error by checking if the index is within bounds
if (indexError !== undefined) {
  console.log("Element at index 3:", indexError);
} else {
  console.log("Index is out of bounds.");
}
