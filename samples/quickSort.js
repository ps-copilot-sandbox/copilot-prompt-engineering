// quick sort algorithm
// Worst case: O(n^2)
// Average case: O(n log n)
// Best case: O(n log n)
// Space complexity: O(log n)

// The quickSort function takes an array as input
function quickSort(array) {
    // If the array has 1 or 0 elements, it is already sorted
    if (array.length <= 1) {
        return array;
    }

    // Choose the first element as the pivot
    let pivot = array[0];
    // Create two empty arrays for elements less than (left) and greater than (right) the pivot
    let left = [];
    let right = [];

    // Iterate over the array, starting from the second element
    for (let i = 1; i < array.length; i++) {
        // If the current element is less than the pivot, add it to the left array
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            // Otherwise, add it to the right array
            right.push(array[i]);
        }
    }

    // Log the current state of the left array, pivot, and right array
    console.log(`Left: ${left}`);
    console.log(`Pivot: ${pivot}`);
    console.log(`Right: ${right}`);

    // Recursively sort the left and right arrays, and combine them with the pivot to get the sorted array
    return quickSort(left).concat(pivot, quickSort(right));
}

module.exports = quickSort;