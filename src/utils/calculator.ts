// src/utils/calculator.ts

export function add(numbers: string): number {
    if (numbers.trim() === "") return 0;
  
    let delimiter = /[,\n]/;
    let numString = numbers;
  
    // Check for custom delimiter
    if (numbers.startsWith("//")) {
      const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
      if (delimiterMatch) {
        const customDelimiter = delimiterMatch[1];
        delimiter = new RegExp(`[${customDelimiter}]`);
        numString = numbers.substring(delimiterMatch[0].length);
      }
    }
  
    const numArray = numString.split(delimiter).map(Number);
  
    // Check for invalid numbers
    if (numArray.some(isNaN)) {
      throw new Error("Invalid input: all inputs must be numbers.");
    }
  
    // Handle negative numbers
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
  
    return numArray.reduce((a, b) => a + b, 0);
  }
  