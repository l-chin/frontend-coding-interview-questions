/**
 * This is a lightly optimized version of a naive primality test. We make a couple of optimizations:
 *
 * - We only need to check up to the square root of our number
 * - We use an iterative solution instead of a recursive one so we are not susceptible to stack overflows
 *
 * Note that much more efficient solutions exist, but are harder to understand. Eg. Google "AKS primality test".
 */
/// question: write a function that checks if a number is prime, which is a number that is only divisible by 1 and itself
/// input: a number
/// output: a boolean
// 1. if the number is less than 2, return false
// 2. for each number from 2 to the square root of the number, check if the number is divisible by the current number
// 3. if it is, return false
// 4. if it is not, return true



/// solution

function isPrime(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i < Math.ceil(Math.sqrt(n)) + 1; i++) {
    if (n % i === 0 && i !== n) {
      return false
    }
  }
  return true
}

const isPrimeTest1 = (n) => {
  if(n< 2) return false
  for (let i = 2; i <= n; i++) {
    if(n % i === 0 && i !== n) {
      return false
    }
  }
  return true
}

/// tests

import { test } from 'ava'

test(t => t.is(isPrime(0), false))
test(t => t.is(isPrime(1), false))
test(t => t.is(isPrime(2), true))
test(t => t.is(isPrime(9), false))
test(t => t.is(isPrime(17), true))
test(t => t.is(isPrime(25), false))
test(t => t.is(isPrime(73), true))
test(t => t.is(isPrime(10000000000000), false))

test(t => t.is(isPrimeTest1(0), false))
test(t => t.is(isPrimeTest1(1), false))
test(t => t.is(isPrimeTest1(2), true))
test(t => t.is(isPrimeTest1(9), false))
test(t => t.is(isPrimeTest1(17), true))
test(t => t.is(isPrimeTest1(25), false))
test(t => t.is(isPrimeTest1(73), true))
test(t => t.is(isPrimeTest1(10000000000000), false))