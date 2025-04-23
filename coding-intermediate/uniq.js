/// solution

function uniq(array) {

  // keep track of already seen numbers in an object,
  // because checking if an object has a certain key
  // is cheap (it takes O(1) time).
  //
  // if we didn't use this object, we'd have to check
  // if result contains current on every turn of the
  // loop, which would take up to O(N * log(N)) time.
  let seen = {}

  return array.reduce((result, current) => {
    if (current in seen) {
      return result
    }
    seen[current] = true
    return result.concat(current)
  }, [])
}
// time complexity: O(n)
// space complexity: O(n)
// since we are using the reduce method, the time complexity is O(n), because we are iterating through the array once
// since we are using the reduce method, the space complexity is O(n), because we are creating a new array

/// tests

import { test } from 'ava'

test(t => t.deepEqual(uniq([]), []))
test(t => t.deepEqual(uniq([1, 4, 2, 2, 3, 4, 8]), [1, 4, 2, 3, 8]))
