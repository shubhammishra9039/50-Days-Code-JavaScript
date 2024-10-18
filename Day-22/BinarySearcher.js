function BinarySearcher(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        
        if (arr[mid] === target) {
            return true;
        }
        
        if (arr[mid] > target) {
            end = mid - 1; 
        } else {
            start = mid +1 ; 
        }
    }

    return false; 
}

console.log(BinarySearcher([1, 2, 3, 4, 5], 2)); 
console.log(BinarySearcher([5, 4, 3, 2, 1], 2)); 
