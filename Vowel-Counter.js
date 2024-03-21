// 6. The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.


let str = "AbhishekUio"

let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]

let count = 0;
for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        count++;
    }

}
console.log(count)



// Method 2

function containsVowels(str) {
    return /["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]/.test(str);
}
let str1 = "bhshk" // False
let str2 = "Abhishek" // True
console.log(containsVowels(str1))
console.log(containsVowels(str2))