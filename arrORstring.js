// 1. Merge Strings Alternately

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

var mergeAlternately = function(word1, word2) {
    let result = '';
    let maxLen = Math.max(word1.length, word2.length);
    for (let i = 0; i < maxLen; i++) {
        if(word1[i]) {
            result = result + word1[i]
        }
        if(word2[i]) {
            result = result + word2[i]
        }
        
    }
    return result
};

console.log(mergeAlternately('abc', 'pqr22'))