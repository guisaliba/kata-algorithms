function bubbleSort(arr: number[]): void {
  const n = arr.length;
  let flag = true;

  for (let i = 0; i < n - 1; i++) {
    flag = true;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];

        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = false;
      }
    }

    if (flag === true) {
      break;
    }
  }
}

const primes = [23, 17, 2, 5, 3, 7, 13, 11, 19];

console.log(`Before sorting: ${primes}`); // [23,17,2,5,3,7,13,11,19]
bubbleSort(primes);
console.log(`After sorting: ${primes}`); // [2,3,5,7,11,13,17,19,23]
