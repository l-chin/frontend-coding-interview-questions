// question: Takes a string and returns true or false indicating 
// whether its curly braces are balanced.
// thought process:
// 1. initialize a count variable to 0
// 2. loop through the string
// 3. if the current character is an opening brace, increment the count
// 4. if the current character is a closing brace, decrement the count
// 5. if the count is ever negative, return false
// 6. return true if the count is 0

// solution: 
function isBalanced(string) {
  let count = 0
  for (let letter of string) {
    if (letter === '{') {
      count++
    }
    if (letter === '}') {
      count--

      // if a closing bracket doesn't have a matching
      // opening bracket, we should return early.
      if (count < 0) {
        return false
      }

    }
  }
  return count === 0
}
// time complexity: O(n)
// space complexity: O(1)

// practice:
const isBalancedTest1 = (str) => {
  let count = 0
  let arr = str.split('')
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === '{') {
      count++
    }
    if(arr[i] === '}') {
      count--
      if(count < 0) return false
    }
  }
  return count === 0
}

/// tests

import { test } from 'ava'

test(t => t.is(isBalanced('}{'), false))
test(t => t.is(isBalanced('{{}'), false))
test(t => t.is(isBalanced('{}{}'), true))
test(t => t.is(isBalanced('foo { bar { baz } boo }'), true))
test(t => t.is(isBalanced('foo { bar { baz }'), false))
test(t => t.is(isBalanced('foo { bar } }'), false))

test(t => t.is(isBalancedTest1('}{'), false))
test(t => t.is(isBalancedTest1('{{}'), false))
test(t => t.is(isBalancedTest1('{}{}'), true))
test(t => t.is(isBalancedTest1('foo { bar { baz } boo }'), true))
test(t => t.is(isBalancedTest1('foo { bar { baz }'), false))
test(t => t.is(isBalancedTest1('foo { bar } }'), false))

// 更优解决方案：使用栈处理多种括号类型
const isBalancedBetter = (str) => {
  const stack = [];
  const brackets = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  
  for (let char of str) {
    // 如果是开括号，压入栈中
    if (brackets[char]) {
      stack.push(char);
    } 
    // 如果是闭括号，检查是否匹配
    else if (Object.values(brackets).includes(char)) {
      const lastBracket = stack.pop();
      
      // 如果栈为空或闭括号不匹配栈顶的开括号
      if (!lastBracket || brackets[lastBracket] !== char) {
        return false;
      }
    }
  }
  
  // 最后检查栈是否为空
  return stack.length === 0;
}

// 测试更通用的解决方案
test(t => t.is(isBalancedBetter('}{'), false))
test(t => t.is(isBalancedBetter('{{}'), false))
test(t => t.is(isBalancedBetter('{}{}'), true))
test(t => t.is(isBalancedBetter('foo { bar { baz } boo }'), true))
test(t => t.is(isBalancedBetter('foo { bar { baz }'), false))
test(t => t.is(isBalancedBetter('foo { bar } }'), false))

// 测试多种括号类型
test(t => t.is(isBalancedBetter('{[()]}'), true))
test(t => t.is(isBalancedBetter('{[(])}'), false))
test(t => t.is(isBalancedBetter('([{}])'), true))
test(t => t.is(isBalancedBetter('[{()}]'), true))

