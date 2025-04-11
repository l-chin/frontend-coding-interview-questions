// question: implement reduce function
// reduce function takes an array, a function, and a value as arguments
// it returns a single value
// example:
// reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10
// step by step:
// 1. create a variable to store the result
// 2. iterate through the array
// 3. apply the function to the current value and the next value
// 4. update the result with the return value of the function
// 5. return the result

/// solution: using for loop
function reduce(array, fn, value) {
  for (let i = 0; i < array.length; i++) {
    let current = array[i]
    value = fn(value, current, i, array) 
  }
  return value
}
// time complexity: O(n)
// space complexity: O(1)
// pass 4 arguments: value, current, index, array to align with the signature of the function
// since the reduce funtion can accept 4 arguments - accumulator, currentValue, currentIndex, array,
//  we need to pass 4 arguments to the function to align with the signature of the function

// practice:
const reduceTest1 = (array, fn, value) => {
  for (let index = 0; index < array.length; index++) {
    value = fn(value, array[index])
  }
  return value
}

/// tests

import { test } from 'ava'

test(t => t.is(reduce([1, 2, 3, 4], (a, b) => a + b, 0), 10))

test(t => t.is(reduceTest1([1, 2, 3, 4], (a, b) => a + b, 0), 10))
