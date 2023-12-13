function bubbleSort(arr) {
    var n = arr.length;
    var flag = true;
    for (var i = 0; i < n - 1; i++) {
        flag = true;
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
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
var primes = [23, 17, 2, 5, 3, 7, 13, 11, 19];
console.log("Before sorting: ".concat(primes));
bubbleSort(primes);
console.log("After sorting: ".concat(primes));
