function sumFor(num) {
  let total = 0;
  for (const i of num) {
    total += i;
  }
  return total;
}

function sumWhile(num) {
  const end = num.length;
  let iterator = 0;
  let total = 0;
  while (num[iterator] < end) {
    total += num[iterator];
    iterator++;
  }
  return total;
}

function sumRecursion(num) {
  if (num.length === 0) {
    return 0;
  }
  return num[0] + sumRecursion(num.slice(1, num.length));
}

console.log(sumFor([1, 2, 3]));
console.log(sumWhile([1, 2, 3]));
console.log(sumRecursion([1, 2, 3]));
