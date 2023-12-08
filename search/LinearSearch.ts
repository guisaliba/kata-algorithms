// Time complexity is O(n) because the worst case scenario is that the needle is at the end of the haystack.
// So we would have to iterate over the entire haystack in order to find the needle.

function linearSearch(haystack: number[], needle: number): boolean {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true;
    }
  }
  return false;
}

// Space complexity is O(1) because we are not creating any new data structures in memory.
