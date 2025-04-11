/**
 * Note: We put the recursive call in tail position, so
 * that it can be optimized by the JavaScript compiler.
 */

/// question: write a function that calculates the factorial of a number
/// input: a number
/// output: a number
/// constraints: 
/// - the number is a positive integer
/// - the number is less than 10000000000000
/// - the number is not 0 or 1
// example: factorial(6) = 6 * 5 * 4 * 3 * 2 * 1 = 720

/// solution

const factorialTest1 = (n) => {
  if(n === 0 || n === 1) return 1
  for(let i = n; i > 1; i--) {
    n *= i - 1
  }
  return n
}

const tailFactorialTest2 = (n, total) => {
  switch (n) {
    case 0: return 1
    case 1: return total
    default: return tailFactorialTest2(n - 1, n * total)
  }
}


const factorialTest2 = (n) => {
  return tailFactorialTest2(n, 1)
}

function tailFactorial(n, total) {
  switch (n) {
    case 0: return 1
    case 1: return total
    default: return tailFactorial(n - 1, n * total)
  }
}

function factorial(n) {
  return tailFactorial(n, 1)
}

/// tests

import { test } from 'ava'

test(t => t.is(factorial(0), 1))
test(t => t.is(factorial(1), 1))
test(t => t.is(factorial(6), 720))

test(t => t.is(factorialTest1(0), 1))
test(t => t.is(factorialTest1(1), 1))
test(t => t.is(factorialTest1(6), 720))

test(t => t.is(factorialTest2(0), 1))
test(t => t.is(factorialTest2(1), 1))
test(t => t.is(factorialTest2(6), 720))
