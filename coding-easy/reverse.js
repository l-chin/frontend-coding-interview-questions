/**
* Note: This solution aims for clarity, but does not give correct results when given unicode characters
* from the supplementary planes (including Chinese characters, emojis, etc.). See discussion here:
* https://github.com/bcherny/frontend-interview-questions/issues/6.
*/

// question: implement reverse function
// reverse function takes a string as an argument
// it returns a string
// example:
// reverse('hello') // 'olleh'
// step by step:
// 1. create a variable to store the result
// 2. iterate through the string
// 3. add the current character to the result
// 4. return the result

/// solution
function reverse(string) {
  let index = string.length - 1
  let result = ''
  while (index > -1) {
    result += string[index]
    index--
  }
  return result
}
// time complexity: O(n)
// space complexity: O(n)

// practice:
const reverseTest1 = (string) => {
  let result = ''
  for (let index = string.length - 1; index > -1; index--) {
    result += string[index]
  }
  return result
}
// time complexity: O(n)
// space complexity: O(n)

// solution 2: using double pointers
const reverseTest2 = (string) => {
  const array = string.split('') // const array = [...string]
  let left = 0
  let right = array.length - 1
  while (left < right) {
    [array[left], array[right]] = [array[right], array[left]]
    left++
    right--
  }
  return array.join('')
}
// time complexity: O(n)
// space complexity: O(n)

// solution 3: using reduce
const reverseTest3 = (string) => {
  return string.split('').reduce((result, char) => char + result, '')
}
// time complexity: O(n)
// space complexity: O(n)

// reverse list
const reverseList = (list) => {
  return list.reduce((reversed, item) => [item, ...reversed], [])
}
// time complexity: O(n)
// space complexity: O(1)

/// tests

import { test } from 'ava'

test(t => t.is(reverse(''), ''))
test(t => t.is(reverse('abcdef'), 'fedcba'))

test(t => t.is(reverseTest1(''), ''))
test(t => t.is(reverseTest1('abcdef'), 'fedcba'))

test(t => t.is(reverseTest2(''), ''))
test(t => t.is(reverseTest2('abcdef'), 'fedcba'))

test(t => t.is(reverseTest3(''), ''))
test(t => t.is(reverseTest3('abcdef'), 'fedcba'))

test(t => t.deepEqual(reverseList([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1])) 
