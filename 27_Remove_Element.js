/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length==0){
        return
    }

    let k=0
    //[1,2,3,2,4,5,2,4,5,5]
    for(let j=0; j<nums.length;j++){
        if(nums[j]!==val){
            nums[k]=nums[j]
            k++;
        }
    }
    return k
};
console.log(removeElement([3,2,2,3],3)) // Output: 2
console.log(removeElement([0,1,2,2,3,0,4,2],2)) // Output: 5
