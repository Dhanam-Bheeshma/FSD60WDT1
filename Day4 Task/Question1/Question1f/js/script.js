//Return median of two sorted arrays of the same size
const findMedian = (arr) => {
    var nums1 = arr[Math.floor(arr.length / 2)];
    var nums2 = arr[Math.ceil(arr.length / 2)];
    const half = arr.length / 2;
    return arr.length % 2 ? arr[Math.floor(half)] : (arr[half - 1] + arr[half]) / 2;
}
let sorted = [...nums1, ... nums2].sort((a, b) => a - b);
const findMedianSortedArrays = (nums1, nums2) => {
    return findMedian([...nums1, ... nums2].sort((a, b) => a - b));
}
a: ([1, 2, 3, 4, 5, 6]);  
b: ([3, 4, 5, 6, 7, 8])  