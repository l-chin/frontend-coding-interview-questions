// question: implement isPalindrome function
// isPalindrome function takes a string as an argument
// it returns true if the string is a palindrome
// otherwise, it returns false
// example:
// isPalindrome('abcdcba') // true
// isPalindrome('abcd') // false

/// solution
function isPalindrome(string) {
  let _string = string.replace(/\s/g, '').toLowerCase()
  return reverse(_string) === _string
}

function reverse(string) {
  return string.split('').reverse().join('')
}
// time complexity: O(n)
// space complexity: O(n)
// since we are using the split, reverse and join methods, the time complexity is O(n)
// since we are using the split method, the space complexity is O(n)， because we are creating a new array

  // practice:
const isPalindromeTest1 = (str) => {
  let sanitizedStr = str.replaceAll(" ", '').toLowerCase()
  let reversedSanitizedStr = sanitizedStr.split('').reverse().join('')
  return reversedSanitizedStr === sanitizedStr
}
// time complexity: O(n)
// space complexity: O(n)

// solution 2: using double pointers
const isParlindromeTest2 = (str) => {
  let sanitizedStr = str.replaceAll(" ", '').toLowerCase()
  let left = 0
  let right = sanitizedStr.length - 1
  while (left < right) {
    if(sanitizedStr[left] !== sanitizedStr[right]) return false
    left++
    right--
  }
  return true
}
// time complexity: O(n)
// space complexity: O(1)
// since we are using the double pointers, the time complexity is O(n), because we are iterating through the string once
// since we are not using any extra space, the space complexity is O(1)s

const isParlindromeTest3 = (str) => {
  let sanitizedStr = str.replaceAll(" ", "").toLowerCase()
  
  if (sanitizedStr.length === 0) return true
  if(sanitizedStr.length === 1) return false
  
  let left = 0
  let right = sanitizedStr.length - 1
  while(left < right) {
    if(sanitizedStr[left] !== sanitizedStr[right]) return false

    left++
    right--
  }
  return true

}

/// tests

import { test } from 'ava'

test(t => t.is(isPalindrome(''), true))
test(t => t.is(isPalindrome('abcdcba'), true))
test(t => t.is(isPalindrome('abcd'), false))
test(t => t.is(isPalindrome('A man a plan a canal Panama'), true))

test(t => t.is(isPalindromeTest1(''), true))
test(t => t.is(isPalindromeTest1('abcdcba'), true))
test(t => t.is(isPalindromeTest1('abcd'), false))
test(t => t.is(isPalindromeTest1('A man a plan a canal Panama'), true))

test(t => t.is(isParlindromeTest2(''), true))
test(t => t.is(isParlindromeTest2('abcdcba'), true))
test(t => t.is(isParlindromeTest2('abcd'), false))
test(t => t.is(isParlindromeTest2('A man a plan a canal Panama'), true))

test(t => t.is(isParlindromeTest3(''), true))
test(t => t.is(isParlindromeTest3('abcdcba'), true))
test(t => t.is(isParlindromeTest3('abcd'), false))
test(t => t.is(isParlindromeTest3('A man a plan a canal Panama'), true))

