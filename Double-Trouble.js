//2 The Double Trouble:
// You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doublearr(arr) {
    let result = [];
    let prevElement = null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === prevElement) {
            result.push(arr[i]);
        } else {
            result.push(arr[i] * 2);
        }
        prevElement = arr[i];
    }

    return result;
}


const originalArray = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5];
const doubledArray = doublearr(originalArray);
console.log(doubledArray); 