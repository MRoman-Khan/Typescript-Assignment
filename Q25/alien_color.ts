// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alienColor: string = 'green';

// Write an if statement to test whether the alien's color is green.
if (alienColor === 'green') {
  // If it is, print a message that the player just earned 5 points.
  console.log('You just earned 5 points!');
}

// Write one version of this program that passes the if test and another that fails.
// (The version that fails will have no output.)

// Version that passes the if test:
alienColor = 'green';
if (alienColor === 'green') {
  console.log('You just earned 5 points!');
}

// Version that fails the if test:
alienColor = 'yellow';
if (alienColor === 'green') {
  console.log('You just earned 5 points!');
}
