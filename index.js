function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++){
    for(let j = i+1; j < array.length; j++){
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false; 
}

/*
 write algorithm here:
 1. find which iteration method to use.
 2. write another loop to be paired with it. This inner loop should be 1 place ahead of the outer loop in the array 
 3. compare the loops together through each iteration
 4. if any csum of the 2 loops === the target, return true, if not, return false
 */


/* 
  Write the Big O time complexity of your function here
  = O(n^2)
*/

/* 
  create a loop to iterate through the array: let i = 0, i <array.length; i++
  inside of that loop, nest another loop to iterate through the array one step ahead of the first loop. let j = i + 1; j <array.length; j++
  write an if statement for if any combinatino of the 2 loops = the target, then the fuction returns true. if arrayi + arrayj = target return true 
  if not, then it returns false 
*/

/*
  I start by creating a loop to iterate through the array. the second loop is nested in the first one. It is set to iterathe through the array 
  along with the first loop, only iterating one number ahead. The if statement says that for every time the outer loop
  passes to a new position in the array, add it to the number in the nested array, and check to see if it equals the target.
  if at anytime the function finds a comnination that equals the target, it will return true. If not, it will return false. 
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
