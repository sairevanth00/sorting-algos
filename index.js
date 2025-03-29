let arr = [2, 6, 1, 3, 0, 9, 8, 7, 5,  4];
let arr2 = [1, 2, 3, 4, 5]

// finding min number & swaps;
function selectionSort(arr) {
    for(let i = 0; i <= arr.length - 2; i++) {
      let minIndex = i;
      for(let j = i; j <= arr.length - 1; j++) {
        if(arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    };
}

// swap the adjasent nums until largest element went to end.
function bubbleSort(arr) {
    for(let i = arr.length - 1; i >= 0; i--) {
        let isSwaps = false;
        for(let j = 1; j < arr.length; j++) {
            if(arr[j] < arr[j-1]) {
                
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
                isSwaps = true;
            }
        };
        console.log('runs')
        if(!isSwaps) break;
    }
    return arr;
}

// find the current index of num, & from there swap to the left.
function insertionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
       let j = i;
       while(j > 0 && arr[j - 1] > arr[j]) {
           [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
           j--;
       }
    };
   return arr;
};

console.log(insertionSort(arr));

let arr3 = [7,6,5, 2, 1, 5, 8, 3, 9, 4];

function merge(arr, l, m, r) {
    let temp = [];
    let left = l;
    let right = m+1;
    
    while(left <= m && right <= r) {
        if(arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    };
    
    while(left<= m) {
        temp.push(arr[left]);
        left++;
    }
    while(right <= r) {
        temp.push(arr[right]);
        right++;
    };
    
    for(let i = l; i <= r; i++) {
        arr[i] = temp[i - l];
    }
}

function mergeSort(arr, l, r) {
    let m = Math.floor((l+r)/2)
    if(l == r) {
        return;
    };
    mergeSort(arr, l, m);
    mergeSort(arr, m+1, r);
    
    merge(arr, l, m, r);
    return arr;
}

console.log(mergeSort(arr3, 0, arr.length-1))

