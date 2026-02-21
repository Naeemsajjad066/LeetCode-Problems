/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry=1

    for (let i=digits.length-1; i>=0; i--){
        let sum=digits[i]+carry;
        digits[i]=sum%10;
        carry=Math.floor(sum/10)
    }
    if(carry===1){
        digits.unshift(1)
    }
    return digits
};
console.log(plusOne([1,2,3])) // Output: [1,2,4]
console.log(plusOne([4,3,2,1])) // Output: [4,3,2,2]
console.log(plusOne([9])) // Output: [1,0]