//join join() converts array to a string.
//syntax array.join(separator)
// let fruits = ["apple", "banana", "mango"];
// console.log(fruits.join(" - "));
//"apple - banana - mango"

// let letters = ["a", "b", "c"];

// letters.join("-")      // "a-b-c"
// letters.join(" | ")    // "a | b | c"
// letters.join("")       // "abc"   (no spaces)

// let nums = [10, 20, 30];
// console.log(nums.join(" + "));
//"10 + 20 + 30"

// let words = ["JavaScript", "is", "awesome"];
// console.log(words.join(" "));
// // "JavaScript is awesome"

// let arr = ["JS", null, "is", undefined, "fun"];
// console.log(arr.join(" "));



//toString() When you call array.toString(), it joins all the elements of the array into one string, separated by commas.
// const arr = [1, 2, 3, 4];
// console.log(arr.toString()); //"1,2,3,4"

// const arr = ["apple", "banana", "mango"];
// console.log(arr.toString()); // "apple,banana,mango"


// const arr = [1, [2, 3], 4];
// console.log(arr.toString()); // "1,2,3,4"

//[ a, b, c ] → "a,b,c"


//includes
//is a method used to check whether an array contains a specific value.
// const fruits = ["apple", "banana", "mango"];

// console.log(fruits.includes("banana")); // true
// console.log(fruits.includes("grape"));  // false


// const nums = [1, 2, 3, 4];
// console.log(nums.includes(3)); // true
// console.log(nums.includes(5)); // false

// const nums = [1, 2, 3, 4];
// console.log(nums.includes(3)); // true
// console.log(nums.includes(5)); // false

const items = [1, 2, 3, 4, 3];
console.log(items.includes(3, 3)); // true  (starts searching from index 3)
console.log(items.includes(2, 2)); // false (starts searching from index 2)
//includes() Checks if value exists in an array . true / false