/**
 * Converts a Roman numeral string to an integer.
 * @param {string} s - The Roman numeral string.
 * @return {number} - The integer value.
 */
var romanToInt = function(s) {
    // Map of Roman numerals to their integer values
    const map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let total = 0;
    // Iterate through the string
    for (let i = 0; i < s.length; i++) {
        let curr = map[s[i]]; // Current value
        let next = map[s[i + 1]]; // Next value
        // If the current value is less than the next value, subtract it
        if (next && curr < next) {
            total -= curr;
        } else {
            // Otherwise, add it
            total += curr;
        }
    }
    return total;
};

// Example usage
let s = "MCMXCIV";
let result = romanToInt(s);
console.log('Output:', result); // Output: 1994