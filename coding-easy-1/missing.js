// question: implement missing function
// Takes an unsorted array of unique numbers 
// (ie. no repeats) from 1 through some number n, 
// and returns the missing number in the sequence 
// (there are either no missing numbers, or exactly one missing number). 
// Can you do it in O(N) time? Hint: There’s a clever formula you can use.
// example:
// missing([1, 4, 3]) // 2
// step by step:
// 1. sum the array
// 2. calculate the expected sum of the array
// 3. subtract the sum of the array from the expected sum
// 4. return the difference


/// solution
function missing(array) {

  // sum the array, and keep track of the maximum number in it
  let max = array[0]
  let sum = 0
  array.forEach(number => {
    sum += number
    if (number > max) {
      max = number
    }
  })

  // the maximum tells us how long the array should be.
  // we plug it into the formula to sum a series to see
  // what we should expect the sum to be.
  let expectedSum = max * (max + 1) / 2 // core formula
  let difference = expectedSum - sum

  if (difference > 0) {
    return difference
  } else {
    return undefined
  }

}
// time complexity: O(n)
// space complexity: O(1)

// practice:
const missingTest1 = (arr) => {
  if(arr.length === 0) return undefined

  let sum = 0
  let max = arr[0]
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index]
    if(arr[index] > max) max = arr[index]
  }

  let expectedSum = 0
  for (let i = 0; i <= max; i++) {
    expectedSum += i    
  }
  // let expectedSum = max * (max + 1) / 2
  // 1+2+3+4+5
  // 5+4+3+2+1
  // 6+6+6+6+6 => 6 * 5
  // result = (6*5) / 2
  // (1 + max) * n / 2
  // 
  
  const difference = expectedSum - sum
  if(difference > 0) {
    return difference
  } else {
    return undefined
  }
}

// solution 2: exclusive or (XOR) 异域
const missingTest2 = (arr) => {
  if(arr.length === 0) return undefined

  // find the max number in the array
  let max = arr[0]
  for (let index = 0; index < arr.length; index++) {
    if(arr[index] > max) max = arr[index]
  }

  //  return undefined if the max number is not the length of the array
  if(max === arr.length) return undefined

  // xor for max
  let maxXor = 0
  for (let i = 0; i <= max; i++) {
    maxXor ^= i
  } 

  // xor for arr
  let arrXor = 0
  for (let i = 0; i < arr.length; i++) {
    arrXor ^= arr[i]
  }

  // xor for max and arr
  let result = maxXor ^ arrXor
  return result
}
// time complexity: O(n)
// space complexity: O(1)
// since we are using the xor operator, the time complexity is O(n), because we are iterating through the array once
// since we are not using any extra space, the space complexity is O(1)

const missingTest3 = (arr) => {
  if(arr.length === 0) return undefined

  let sum = 0
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if(arr[i] > max) max = arr[i]
  }

  let expectedSum = max * (max + 1) / 2
  let difference = expectedSum - sum
  if(difference > 0) {
    return difference
  } else {
    return undefined
  }
}


/// tests

import { test } from 'ava'

test(t => t.is(missing([]), undefined))
test(t => t.is(missing([1, 4, 3]), 2))
test(t => t.is(missing([2, 3, 4]), 1))
test(t => t.is(missing([5, 1, 4, 2]), 3))
test(t => t.is(missing([1, 2, 3, 4]), undefined))

test(t => t.is(missingTest1([]), undefined))
test(t => t.is(missingTest1([1, 4, 3]), 2))
test(t => t.is(missingTest1([2, 3, 4]), 1))
test(t => t.is(missingTest1([5, 1, 4, 2]), 3))
test(t => t.is(missingTest1([1, 2, 3, 4]), undefined))

test(t => t.is(missingTest2([]), undefined))
test(t => t.is(missingTest2([1, 4, 3]), 2))
test(t => t.is(missingTest2([2, 3, 4]), 1))
test(t => t.is(missingTest2([5, 1, 4, 2]), 3))
test(t => t.is(missingTest2([1, 2, 3, 4]), undefined))

test(t => t.is(missingTest3([]), undefined))
test(t => t.is(missingTest3([1, 4, 3]), 2))
test(t => t.is(missingTest3([2, 3, 4]), 1))
test(t => t.is(missingTest3([5, 1, 4, 2]), 3))
test(t => t.is(missingTest3([1, 2, 3, 4]), undefined))

