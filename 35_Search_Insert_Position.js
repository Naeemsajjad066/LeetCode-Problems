/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    //[1,3,5,6]
    let k=0
    for(let i=0; i<nums.length;i++){
        if(nums[i]===target){
            return i
        }else{
            if(nums[i]<target){
                k++
            }
        }

    }
    return k
};
console.log(searchInsert([1,3,5,6],5)) // Output: 2