/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
     // Define the integer range limits
    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;
    
    // Initialize result to store the reversed integer
    let result = 0;
    
    // Process the input integer
    while (x !== 0) {
        // Extract the last digit of x and append it to result
        const digit = x % 10;
        result = result * 10 + digit;
        
        // Update x by removing its last digit
        x = Math.trunc(x / 10);
    }
    
    // Check if the reversed integer is within the 32-bit range
    if (result < INT_MIN || result > INT_MAX) {
        return 0;
    }
    
    return result;

};
