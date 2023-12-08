// We have an array of numbers (haystack) in which we want to find our needle (an element);
// We want to return true if the needle is in the haystack, false otherwise;

// Imagine this array [0, 1, 2, 3, 4, 5, 6, 7, 120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200, 1320, 1440];
// We want to find needle 1200;

// First we define a low and high index;
// The low index is the first element of the array (0), the high index is the last element of the array (haystack.length);
// Now we want to define what is the middle index of the array;
// We do that by adding the low and high index and dividing by 2, in code that would be Math.floor((lo + hi) / 2);
// The Math.floor() method of JavaScript floors a number, meaning it rounds it down to the nearest integer;

// Now that we have the middle index, we want to check if the middle element is the needle;
// If it is, we return true, if it's not, we check if the middle element is greater than the needle;

// If the middle element is greather than the needle, that means that every other element to the right of the middle
// element is also greater than the needle, so we don't have to look up for them. We can discard them;
// If the middle is less than the needle, it means that every element to the left of the needle is also less than the
// needle, so we can discard them as well;

// We want to keep doing that until we find the needle or until we discard every element in the array;
// If we discard every element in the array, we return false. We achieve that when the lowest index becomes the highest;

function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;

  const mid = Math.floor((lo + hi) / 2);

  const val = haystack[mid];

  do {
    if (val === needle) {
      return true;
    } else if (val > needle) {
      hi = val;
    } else {
      lo = val + 1;
    }
  } while (lo < hi);

  return false;
}
