/// question: write a function that checks if an array is sorted
/// input: an array of numbers
/// output: a boolean
/// constraints:
/// - the array is not empty
/// - the array is not sorted
/// - the array is not sorted in ascending order
/// examples: 
// isSorted([1, 2, 3, 4, 5]) // true
// step by step:
// 1. iterate through the array
// 2. compare each element with the next one
// 3. if the current element is greater than the next one, return false
// 4. if the loop completes without returning false, return true


/// solution 1: iterative
function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    let current = array[i]
    let next = array[i + 1]
    if (next && current > next) {
      // exit as soon as we know the array isn't sorted
      return false
    }
  }
  return true
}

// practice:
const isSortedTest1 = (array) => {
  for (let index = 0; index < array.length; index++) {
    if(array[index+ 1] && array[index] > array[index + 1]) return false
  }
  return true
}
// time complexity: O(n)
// space complexity: O(1)

// optimal solution: reduced one unnecessary iteration and comparison
const isSortedTest2 = (array) => {
 for (let index = 0; index < array.length - 1; index++) {
  if(array[index] > array[index + 1]) return false
 }
 return true
}
// time complexity: O(n)
// space complexity: O(1)

// solution 3: using Array.every()
const isSortedTest3 = (array) => {
  return array.every((element, index) => {
    return index === 0 || element >= array[index - 1]
  })  
}
// time complexity: O(n)
// space complexity: O(1)
// Principle: The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a boolean value.
// if return false, it will stop and return false immediately
// otherwise, it all checks passed and then it will return true
// pros: concise and readable
// cons: less efficient than the optimal solution

// solution 4: using reduce()
const isSortedTest4 = (array) => {
  return array.reduce((isSorted, element, index) => {
    return isSorted && (index === 0 || element >= array[index - 1])
  }, true)
}
// time complexity: O(n)
// space complexity: O(1)
// pros: concise and readable
// cons: 
// 1. less efficient than the optimal solution
// 2. always iterate through the entire array, and won't stop early

// solution 5: 
const isSortedTest5 = (array) => {
  for (let i = 0; i < array.length; i++) {
    if(array[i + 1] && array[i] > array[i+1]) return false    
  } 
  return true
}

const isSortedTest6 = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if(array[i] > array[i+1]) return false
  }
  return true
}

const isSortedTest7 = (array) => {
  return array.every((element, index) => index === 0 || element >= array[index - 1])
}

const isSortedTest8 = (array) => {
  return array.reduce((isSorted, element, index) => isSorted && (index === 0 || element >= array[index - 1]), true)
}

/// tests

import { test } from 'ava'

test(t => t.is(isSorted([]), true))
test(t => t.is(isSorted([-Infinity, -5, 0, 3, 9]), true))
test(t => t.is(isSorted([3, 9, -3, 10]), false))

test(t => t.is(isSortedTest1([]), true))
test(t => t.is(isSortedTest1([-Infinity, -5, 0, 3, 9]), true))
test(t => t.is(isSortedTest1([3, 9, -3, 10]), false))

test(t => t.is(isSortedTest2([]), true))
test(t => t.is(isSortedTest2([-Infinity, -5, 0, 3, 9]), true))
test(t => t.is(isSortedTest2([3, 9, -3, 10]), false))

test(t => t.is(isSortedTest3([]), true))
test(t => t.is(isSortedTest3([-Infinity, -5, 0, 3, 9]), true))
test(t => t.is(isSortedTest3([3, 9, -3, 10]), false))

test(t => t.is(isSortedTest4([]), true))
test(t => t.is(isSortedTest4([-Infinity, -5, 0, 3, 9]), true))
test(t => t.is(isSortedTest4([3, 9, -3, 10]), false))

test(t => t.is(isSortedTest5([]), true))
test(t => t.is(isSortedTest5([-Infinity, -5, 0, 3, 9]), true))
test(t => t.is(isSortedTest5([3, 9, -3, 10]), false))

test(t => t.is(isSortedTest6([]), true))
test(t => t.is(isSortedTest6([-Infinity, -5, 0, 3, 9]), true))
test(t => t.is(isSortedTest6([3, 9, -3, 10]), false))

test(t => t.is(isSortedTest7([]), true))
test(t => t.is(isSortedTest7([-Infinity, -5, 0, 3, 9]), true))
test(t => t.is(isSortedTest7([3, 9, -3, 10]), false))

test(t => t.is(isSortedTest8([]), true))
test(t => t.is(isSortedTest8([-Infinity, -5, 0, 3, 9]), true))
test(t => t.is(isSortedTest8([3, 9, -3, 10]), false))
