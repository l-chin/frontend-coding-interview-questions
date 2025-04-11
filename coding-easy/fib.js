/// question: write a function that calculates the nth number in the fibonacci sequence
/// input: a number
/// output: a number
/// constraints: 
/// - the number is a positive integer
/// - the number is less than 10000000000000
/// - the number is not 0 or 1

// example: fib(10) = 55
// step by step:
// fib(10) = fib(9) + fib(8)
// fib(9) = fib(8) + fib(7)
// fib(8) = fib(7) + fib(6)
// fib(7) = fib(6) + fib(5)
// fib(6) = fib(5) + fib(4)
// fib(5) = fib(4) + fib(3)

// solution 1: recursive
function fib(n) {
  switch (n) {
    case 0: return 0
    case 1: return 1
    default: return fib(n - 1) + fib(n - 2)
  }
}

const fibTest1 = (n) => {
  if (n === 0) return 0
  if (n === 1) return 1
  return fibTest1(n - 1) + fibTest1(n - 2)
}
// time complexity: O(2^n)
// space complexity: O(n)
// this is a very inefficient way to calculate the fibonacci sequence
// it is not practical for large numbers

// solution 2: iterative(dynamic programming)
// dynamic programming is a technique that breaks down a problem into smaller subproblems and solves each subproblem only once
// it then stores the results of each subproblem in a table and uses the results to solve the original problem
// time complexity: O(n)
// space complexity: O(1)
// this is a more efficient way to calculate the fibonacci sequence
// it is practical for large numbers
const fibTest2 = (n) => {
  if (n === 0) return 0
  if (n === 1) return 1
  let a = 0
  let b = 1
  for (let i = 2; i <= n; i++) {
    // let temp = a + b
    // a = b
    // b = temp
    [a, b] = [b, a + b] // sliding window
  }
  return b
}

// solution 3: traditional dynamic programming
// time complexity: O(n)
// space complexity: O(n)
// this is a more efficient way to calculate the fibonacci sequence
// it is practical for large numbers
const fibTest3 = (n) => {
  const dp = new Array(n + 1)
  dp[0] = 0
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

/// tests

import { test } from 'ava'

test(t => t.is(fib(0), 0))
test(t => t.is(fib(1), 1))
test(t => t.is(fib(10), 55))
test(t => t.is(fib(20), 6765))

test(t => t.is(fibTest1(0), 0))
test(t => t.is(fibTest1(1), 1))
test(t => t.is(fibTest1(10), 55))
test(t => t.is(fibTest1(20), 6765)) 

test(t => t.is(fibTest2(0), 0))
test(t => t.is(fibTest2(1), 1))
test(t => t.is(fibTest2(10), 55))
test(t => t.is(fibTest2(20), 6765)) 

test(t => t.is(fibTest3(0), 0))
test(t => t.is(fibTest3(1), 1))
test(t => t.is(fibTest3(10), 55))
test(t => t.is(fibTest3(20), 6765)) 