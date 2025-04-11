// question: implement filter function
// filter function takes an array and a function as arguments
// it returns a new array with all elements that pass the test implemented by the provided function
// example:
// filter([1, 2, 3, 4], n => n < 3) // [1, 2]
// step by step:
// 1. create a new array
// 2. iterate through the array
// 3. check if the element passes the test implemented by the provided function
// 4. if it does, push it to the new array
// 5. return the new array

/// solution
function filter(array, fn) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let current = array[i]
    if (fn(current)) {
      result.push(current)
    }
  }
  return result
}
// time complexity: O(n)
// space complexity: O(n)

// practice:
const filterTest1 = (array, fn) => {
  let result = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(fn(element)) {
      result.push(element)
    }
  }
  return result
}

// solution 2: using reduce
const filterTest2 = (array, fn) => {
  return array.reduce((result, element) => {
    if(fn(element)) {
      result.push(element)
    }
    return result
  }, [])
}
// time complexity: O(n)
// space complexity: O(n)
// pros: concise and readable
// cons: less efficient than the optimal solution

// solution 3: using for of
const filterTest3 = (array, fn) => {
  let result = []
  for (const element of array) {
    if(fn(element)) {
      result.push(element)
    }
  }
  return result
}
// time complexity: O(n)
// space complexity: O(n)
// pros: concise and readable
// cons: less efficient than the optimal solution

/// tests

import { test } from 'ava'

test(t => t.deepEqual(filter([1, 2, 3, 4], n => n < 3), [1, 2]))

test(t => t.deepEqual(filterTest1([1, 2, 3, 4], n => n < 3), [1, 2]))

test(t => t.deepEqual(filterTest2([1, 2, 3, 4], n => n < 3), [1, 2]))

test(t => t.deepEqual(filterTest3([1, 2, 3, 4], n => n < 3), [1, 2]))

