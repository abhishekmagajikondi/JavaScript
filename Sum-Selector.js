// 5. The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.


function ArraySum(Arr) {
    let result = 0;
    for (const numarr of Arr) {
        if (numarr > 0) {
            result = result + numarr;
        } else {
            return result;
        }
    }
    return result;
}
let Arr = [1, 2, -3, 4]
console.log(ArraySum(Arr))


