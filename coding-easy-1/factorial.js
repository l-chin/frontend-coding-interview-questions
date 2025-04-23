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

const factorialTest3 = (n) => {
  if (n < 2) return 1
  let result = 1
  for (let i = n; i > 1; i--) {
    result *= i
  }
  return result
}

const tailFactorialTest4 = (n, total) => {
  switch (n) {
    case 0: return 1
    case 1: return total
    default: return tailFactorialTest4(n - 1, n * total)
  }
}

const factorialTest4 = (n) => {
  if(n === 0 || n === 1) return 1
  return tailFactorialTest4(n, 1)
}

// using dynamic programming
const factorialTest5 = (n) => {
  if(n === 0 || n === 1) return 1
  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result
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


test(t => t.is(factorialTest3(0), 1))
test(t => t.is(factorialTest3(1), 1))
test(t => t.is(factorialTest3(6), 720)) 
test(t => t.is(factorialTest3(10), 3628800))

test(t => t.is(factorialTest4(0), 1))
test(t => t.is(factorialTest4(1), 1))
test(t => t.is(factorialTest4(6), 720))
test(t => t.is(factorialTest4(10), 3628800))

test(t => t.is(factorialTest5(0), 1))
test(t => t.is(factorialTest5(1), 1))
test(t => t.is(factorialTest5(6), 720))
test(t => t.is(factorialTest5(10), 3628800))