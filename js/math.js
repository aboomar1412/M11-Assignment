// PART 2: MATH & MATH FUNCTIONS

function mathExercises() {

    // 1. Convert to positive number
    let num1 = prompt("Enter a number:");
    console.log("Positive value:", Math.abs(num1));
  
    // 2. Round up
    let num2 = parseFloat(prompt("Enter a decimal:"));
    console.log("Rounded up:", Math.ceil(num2));
  
    // 3. Round down
    let num3 = parseFloat(prompt("Enter another decimal:"));
    console.log("Rounded down:", Math.floor(num3));
  
    // 4. Largest and smallest number
    let nums = prompt("Enter 5 numbers separated by commas:");
    let arr = nums.split(",").map(Number);
    console.log("Largest:", Math.max(...arr));
    console.log("Smallest:", Math.min(...arr));
  
    // 5. Square root
    let num4 = prompt("Enter a number:");
    console.log("Square root:", Math.sqrt(num4));
  }
  
  mathExercises();