/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) {
        return "1";
    }

    // Recursively generate the previous term
    const prevTerm = countAndSay(n - 1);

    // Initialize variables to store the current term and count of consecutive characters
    let currentTerm = "";
    let count = 1;

    // Iterate through the previous term to generate the current term
    for (let i = 0; i < prevTerm.length; i++) {
        // If the current character is the same as the next character, increase the count
        if (prevTerm[i] === prevTerm[i + 1]) {
            count++;
        } else {
            // If the current character is different from the next character, append the count and character to the current term
            currentTerm += count + prevTerm[i];
            count = 1;
        }
    }

    return currentTerm;

};