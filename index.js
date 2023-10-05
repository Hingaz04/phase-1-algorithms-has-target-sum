function hasTargetSum(array, target) {
  // Write your algorithm here

    const seenNumbers = new Set();

    for (const num of arr) {
        const difference = target - num;
        if (seenNumbers.has(difference)) {
            return true; // Found a pair that adds up to the target
        }
        seenNumbers.add(num);
    }

    return false; // No pair found
}

// Test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true
console.log(hasTargetSum([1, 2, 5], 4)); // false
console.log(hasTargetSum([1, 2, 2, 3, 4, 5], 7)); // true
console.log(hasTargetSum([], 10)); // false



/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  function hasTargetSum(arr, target):
    Create an empty set to store seen numbers.
    
    For each number num in arr:
        Calculate the difference between target and num (target - num).
        If the difference is in the seen set:
            Return true (a pair exists that adds up to the target).
        Add num to the seen set.
    
    If no pair is found in the loop, return false.


*/

/*
  Add written explanation of your solution here
  You need to create a function that takes an array of integers and a target integer as input. The function should determine if there are two numbers in the array that add up to the target. If such a pair exists, the function should return true. Otherwise, it should return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
