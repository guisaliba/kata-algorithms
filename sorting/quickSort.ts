// TODO: Write notes about quicksort
// TODO: Write time and space complexity

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];
  let index = lo - 1;

  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      index++;
      const temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
  }

  index++;
  arr[hi] = arr[index];
  arr[index] = pivot;

  return index;
}

function quickSortHelper(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) {
    return;
  }

  const pivotIndex = partition(arr, lo, hi);
  quickSortHelper(arr, lo, pivotIndex - 1);
  quickSortHelper(arr, pivotIndex + 1, hi);
}

function quickSort(arr: number[]): void {
  quickSortHelper(arr, 0, arr.length - 1);
}

const primes = [11, 2, 3, 7, 5, 13, 17, 19, 29];

console.log(`Before sorting: ${primes}`);
quickSort(primes);
console.log(`After sorting: ${primes}`);
