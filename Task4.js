// Defining the function f(x) = x^3 - 2x - 5
function f(x) {
	return Math.pow(x, 3) - 2 * x - 5; // Calculate x^3 - 2x - 5
}

// Function to format and display variable data
const displayVarData = (a, b, tolerance, maxIterations) => {
	return `Left endpoint: ${a}\nRight endpoint: ${b}\nTolerance: ${tolerance}\nMax Iterations: ${maxIterations}`;
};

// Implementing the Bisection Method to find a root of f(x) in the interval [a, b]
const bisectionMethod = (a, b, tolerance, maxIterations) => {
	// Loop for a maximum of maxIterations iterations
	for (let i = 0; i < maxIterations; i++) {
		let c = (a + b) / 2; // Calculate the midpoint of the interval [a, b]

		// Check if the midpoint is a root of the function
		if (f(c) === 0) {
			console.log(displayVarData(a, b, tolerance, maxIterations));
			console.log("Root:", c.toFixed(6));
			return;
		}

		// Update the interval [a, b] based on the sign of f(a) * f(c)
		if (f(a) * f(c) < 0) {
			b = c; // The root lies in the left subinterval [a, c]
		} else {
			a = c; // The root lies in the right subinterval [c, b]
		}

		// Check if the current interval width is within the tolerance
		if ((b - a) / 2 <= tolerance) {
			break;
		}
	}
	console.log(displayVarData(a, b, tolerance, maxIterations));
	console.log("Root:", ((a + b) / 2).toFixed(6)); // Output the approximate root
};

// Assigning the initial values to the variables
const a = 1; // Left endpoint of the interval
const b = 3; // Right endpoint of the interval
const tolerance = 0.0001; // Tolerance for convergence
const maxIterations = 100; // Maximum number of iterations

// Calling the bisection method to find the root
console.log(`For a=${a}, b=${b}: `); // displaying the endpoint values
bisectionMethod(a, b, tolerance, maxIterations);
