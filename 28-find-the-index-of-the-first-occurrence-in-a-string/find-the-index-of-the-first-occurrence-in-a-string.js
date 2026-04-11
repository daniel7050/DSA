/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const hayLength = haystack.length;
    const needleLength = needle.length;
    
    if (needleLength === 0) {
        return 0;
    }
    
    for (let i = 0; i <= hayLength - needleLength; i++) {
        let j;
        for (j = 0; j < needleLength; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }
        if (j === needleLength) {
            return i;
        }
    }
    
    return -1;
};