/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let results=0;
    for(i=0;i<nums.length;i++){
        results^=nums[i]
    }
    return results;
};
console.log(singleNumber([2,2,1]))//1
console.log(singleNumber([4,1,2,1,2]))//4