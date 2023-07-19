const checkTargetIndex = (arr, target) => {
    const indices = {};
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (indices.hasOwnProperty(complement)) {
            return [indices[complement], i];
        }
        indices[arr[i]] = i;
    }
    return null; // No two numbers found whose sum is equal to the target
};
console.log(checkTargetIndex([
    1, 2, 3, 4, 5
], 10));
// change number in console and return which numbers of arr  sum