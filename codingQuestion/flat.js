// question: 实现一个数组扁平化, 并给出多种实现方式
// 数组扁平化: 将一个多维数组转换为一维数组

/**
 * 使用递归实现数组扁平化
 * @param {Array} arr 要扁平化的数组
 * @param {number} [depth=1] 扁平化的深度，默认为1
 * @returns {Array} 扁平化后的新数组
 */
function flattenRecursive(arr, depth = 1) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }
  if (typeof depth !== 'number' || !Number.isInteger(depth) || depth < 0) {
      console.warn(`Invalid depth: ${depth}. Using default depth 1.`);
      depth = 1;
  }

  let result = [];

  arr.forEach(element => {
    // 如果是数组且当前深度大于0，则递归处理
    if (Array.isArray(element) && depth > 0) {
      // 使用扩展运算符 (...) 将递归结果的元素添加到 result 中
      result.push(...flattenRecursive(element, depth - 1));
    } else {
      // 如果不是数组，或者深度已为0，直接添加元素
      result.push(element);
    }
  });

  return result;
}

const nestedArray = [1, [2, [3, [4]], 5]];

console.log("--- Recursive JS ---");
console.log("Depth 0:", flattenRecursive(nestedArray, 0)); // [1, [2, [3, [4]], 5]] (不变)
console.log("Depth 1:", flattenRecursive(nestedArray, 1)); // [1, 2, [3, [4]], 5]
console.log("Depth 2:", flattenRecursive(nestedArray, 2)); // [1, 2, 3, [4], 5]
console.log("Depth Infinity:", flattenRecursive(nestedArray, Infinity)); // [1, 2, 3, 4, 5]
console.log("Default Depth (1):", flattenRecursive(nestedArray)); // [1, 2, [3, [4]], 5]
console.log("Empty Array:", flattenRecursive([])); // []