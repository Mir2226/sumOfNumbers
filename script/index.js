// const checkTargetIndex = (arr, target) => {
//     const indices = {};
//     for (let i = 0; i < arr.length; i++) {
//         const complement = target - arr[i];
//         if (indices.hasOwnProperty(complement)) {
//             return [indices[complement], i];
//         }
//         indices[arr[i]] = i;
//     }
//     return null; // No two numbers found whose sum is equal to the target
// };
// console.log(checkTargetIndex([
//     1, 2, 3, 4, 5
// ], 10));
// // change number in console and return which numbers of arr  sum

// ------------------------------------------------------------

    const checkTargetIndex = (arr, target) => {
    const result = [];
     for (let i = 0; i < arr.length; i++) {
         for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
        result.push([i, j]);
      }
    }
  }
  return result;
}
console.log(checkTargetIndex([1, 2, 3, 4, 5, 5], 10));