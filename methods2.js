//indexOf() is a method in JavaScript that tells you the position (index) of a value in an array.
// syntax array.indexOf(value);
// const fruits = ["apple", "banana", "mango"];
// console.log(fruits.indexOf("banana")); // 1
// console.log(fruits.indexOf("mango"));  // 2
// console.log(fruits.indexOf("grape"));  // -1


//reverse() is a method in JavaScript that reverses the order of elements in an array.
// const nums = [1, 2, 3, 4];
// nums.reverse();

// console.log(nums);
// //[4, 3, 2, 1]


//sort() is a method in JavaScript that arranges (sorts) the elements of an array.
//By default, sort() treats values as strings, even if they are numbers.
// const fruits = ["banana", "apple", "mango"];
// fruits.sort();

// console.log(fruits); //["apple", "banana", "mango"]
//sort() arranges items in order, but for numbers you must give a function.

// const animals = ["cat", "elephant", "dog", "bear"];
// animals.sort();
// console.log(animals);

// const nums = [10, 5, 40, 2];
// nums.sort((a, b) => a - b);

// console.log(nums);

// const nums = [10, 5, 40, 2];
// nums.sort((a, b) => a - b);   
// Sort Type	Code	Meaning
// Ascending	(a, b) => a - b	Small → Big
// Descending	(a, b) => b - a	Big → Small
//
//
// console.log(nums);



//starting from decending to Ascending like [ 40, 10, 5, 2 ]
// const nums = [10, 5, 40, 2];
// nums.sort((b, a) => a - b);

// console.log(nums);



//find() is used to search for the first element in an array that matches a condition.
//array.find(function(element) {
 // return condition;
//});


// const numbers = [3, 7, 12, 18, 25];

// const result = numbers.find(num => num > 15);
// console.log(result);

// const ages = [10, 14, 17, 19, 21];

// const adult = ages.find(age => age >= 18);
// console.log(adult);


//flat() is used to remove nested arrays (make the array flat).
// const arr = [1, 2, [3, 4], [5, [6]]];

// const result = arr.flat();
// console.log(result);

// const arr = [1, 2, [3, 4], [5, [6]]];

// const result = arr.flat(Infinity);
// console.log(result);
