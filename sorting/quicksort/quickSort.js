function partition(arr, lo, hi) {
    var pivot = arr[hi];
    var index = lo - 1;
    for (var i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            index++;
            var temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }
    index++;
    arr[hi] = arr[index];
    arr[index] = pivot;
    return index;
}
function quickSortHelper(arr, lo, hi) {
    if (lo >= hi) {
        return;
    }
    var pivotIndex = partition(arr, lo, hi);
    quickSortHelper(arr, lo, pivotIndex - 1);
    quickSortHelper(arr, pivotIndex + 1, hi);
}
function quickSort(arr) {
    quickSortHelper(arr, 0, arr.length - 1);
}
var primes = [11, 2, 3, 7, 5, 13, 17, 19, 29];
console.log("Before sorting: ".concat(primes));
quickSort(primes);
console.log("After sorting: ".concat(primes));
