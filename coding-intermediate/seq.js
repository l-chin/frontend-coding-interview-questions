/// solution

let reduceAsync = async (array, fn, value) => {
  for (let a of array) {
    value = fn(value, await a())
  }
  return value
}

let seq = array =>
  reduceAsync(array, (acc, value) => [...acc, value], [])


let reduceAsync2 = async (arr, fn, value) => {
  for(let a of arr) {
    value = fn(value, await a())
  }
  return value
}

let seq2 = arr => reduceAsync2(arr, (acc, value) => [...acc, value], [])

/// tests

import { test } from 'ava'

test(async t => {
  let a = () => Promise.resolve('a')
  let b = () => Promise.resolve('b')
  let c = () => Promise.resolve('c')

  t.deepEqual(await seq([a, b, c]), ['a', 'b', 'c'])
  t.deepEqual(await seq([a, c, b]), ['a', 'c', 'b'])
})

test(async t => {
  let a = () => Promise.resolve('a')
  let b = () => Promise.resolve('b')
  let c = () => Promise.resolve('c')

  t.deepEqual(await seq2([a, b, c]), ['a', 'b', 'c'])
  t.deepEqual(await seq2([a, c, b]), ['a', 'c', 'b'])
})
