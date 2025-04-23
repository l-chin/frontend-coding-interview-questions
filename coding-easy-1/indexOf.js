// question: implement indexOf function
// indexOf function takes an array and an item as arguments
// it returns the index of the item in the array
// if the item is not found, it returns -1
// example:
// indexOf([1, 2, 3], 1) // 0
// indexOf([1, 2, 3], 4) // -1

/// solution

function indexOf(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i
    }
  }
  return -1
}
// time complexity: O(n)
// space complexity: O(1)

// practice:
const indexOfTest1 = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    if(array[i] === item) return i
  }
  return -1
}
// time complexity: O(n)
// space complexity: O(1)

// solution 2: using double pointers
const indexOfTest2 = (array, item) => {
  let left = 0
  let right = array.length - 1
  while(left <= right) {
    if(array[left] === item) return left  
    if(array[right] === item) return right
    left++
    right--
  }
  return -1
}
// time complexity: O(n)
// space complexity: O(1)
// theoretically, this solution is faster than the first one, but in practice, the first one is faster
// since the first one has less operations

const indexOfTest3 = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    if(item === array[i]) return i    
  }
  return -1
}

const indexOfTest4 = (array, item) => {
  let left = 0
  let right = array.length - 1
  while(left < right) {
    if(item === array[left]) return left
    if(item === array[right]) return right
    left++
    right--
  }
  return -1
}

/// tests

import { test } from 'ava'

test(t => t.is(indexOf([1, 2, 3], 1), 0))
test(t => t.is(indexOf([1, 2, 3], 4), -1))

test(t => t.is(indexOfTest1([1, 2, 3], 1), 0))
test(t => t.is(indexOfTest1([1, 2, 3], 4), -1))

test(t => t.is(indexOfTest2([1, 2, 3], 1), 0))
test(t => t.is(indexOfTest2([1, 2, 3], 4), -1))

test(t => t.is(indexOfTest3([1, 2, 3], 1), 0))
test(t => t.is(indexOfTest3([1, 2, 3], 4), -1))

test(t => t.is(indexOfTest4([1, 2, 3], 1), 0))
test(t => t.is(indexOfTest4([1, 2, 3], 4), -1))


