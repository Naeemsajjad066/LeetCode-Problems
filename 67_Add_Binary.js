/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i=a.length-1;
    let j=b.length-1;
    let carry=0;
    let results=""

    while(i>=0 || j>=0 || carry){
        let sum=carry
        if(i>=0){
            sum+=Number(a[i])
            i--;
        }
        if(j>=0){
            sum+=Number(b[j])
            j--;
        }

        results=(sum%2)+results;
        carry=Math.floor(sum/2)


    }
    return results
};
console.log(addBinary("11","1")) // Output: "100"
console.log(addBinary("1010","1011")) // Output: "10101"