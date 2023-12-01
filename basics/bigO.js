// This is a simple function that sums the char codes of a string. It is O(n) because it has to iterate over each character in the input (string).

function sum_char_codes(n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i);
  }

  return sum;
}

// The simplest trick to tell its complexity is to look at the number of loops. If there is only one loop, it is O(n). If there are two nested loops, it is O(n^2). If there are three nested loops, it is O(n^3). And so on.

function sum_char_codes(n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i);
  }

  // capital E
  if (n.charCodeAt(i) === 69) {
    return sum;
  }

  return sum;
}

// This is still O(n) because the if statement is not inside the loop, it doesn't change anything. If the capital E is at the end of the string, it will still iterate over the whole string.

// This is O(n^2) because there are two nested loops (remember the trick). The inner loop is O(n) and the outer loop is O(n). So the total complexity is O(n * n) = O(n^2).

function sum_char_codes(n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      sum += n.charCodeAt(i);
    }
  }

  return sum;
}
