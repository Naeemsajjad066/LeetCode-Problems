/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle=="") return 0;

    for(let i=0; i<=haystack.length-needle.length; i++){
        let match=true;

        for(let j=0 ; j<needle.length; j++){
            if(haystack[i+j]!==needle[j]){
                match=false
                break;
            }
        }
        if(match) return i
    }

return -1
};

console.log(strStr("hello","ll")) // Output: 2
console.log(strStr("aaaaa","bba")) // Output: -1
console.log(strStr("","")) // Output: 0