// iterationMapping.js

// Prompt user for max limit
let limit = parseInt(prompt("Enter the Limit of the Double Loop:"));

console.log("Result:");

for (let i = 0; i <= limit; i++) {
    for (let j = 0; j <= limit; j++) {
        let sum = i + j;
        console.log(`[${i}] [${j}] Added value is ${sum}`);
    }
}
