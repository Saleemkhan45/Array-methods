// push method putting in last
// let arr = [23, 45, 67, "ali", 89];
// arr.push(999);
// console.log(arr); // output [ 23, 45, 67, 'ali', 89, 999 ] 



//  let arr = [23, 45, 67, "ali", 89];
// arr.push(999);
// console.log(arr); // output [ 23, 45, 67, 'ali', 89, 999 ] 
// console.log(arr.length);
// let b = arr.pop()
// console.log(arr, b); //[ 23, 45, 67, 'ali', 89 ] 999  also returnig remove numbere
//pop method we using last element removing or nekalna


//unshift putting before 
// let arr = [23, 45, 67, 'ali'];
// arr.unshift(0, 45)
// console.log(arr);  // [ 0, 45, 23, 45, 67, 'ali' ]
// // shift taking from fast
// arr.shift();
// console.log(arr); // 45, 23, 45, 67, 'ali' ]

//slice method returns it as a new array, without changing the original array.
// let arr = [2, 3, 4, 'ali', 'kamran'];
// let newArr = arr.slice(2, 4)
// console.log(arr);
// console.log(newArr);


//If you don't give end index, slice goes till the end.
// let fruits = ["apple", "banana", "mango", "orange", 'chola'];
// let result = fruits.slice(2);

// console.log(result); // ["mango", "orange" "chola"]


//Negative numbers count from the end.
// let letters = ['a', 'b', 'c', 'd', 'e'];
// let result = letters.slice(-3);            
// console.log(result); // ['c', 'd', 'e']

//start is included
//→ end is NOT included


// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.slice(2, 5)); // [3, 4, 5]



//SPLICE taking three thing. splice() is used to add, remove, or replace elements in the original array.
// sytax  array.splice(startIndex, deleteCount, item1, item2, ...)
//deleteCountnHow many items to remove
//Removing items
// let arr = [10, 20, 30, 40, 50];
// arr.splice(2, 2); 

// console.log(arr); //[10, 20, 50]  Start at index 2 -> remove 2 items → removed 30 and 40.


// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(2, 1, 10, 20);
// console.log(numbers); // output [1, 2, 10, 20, 4, 5]
// at index 2, 1 means del 1, add this 10, 20


//Concate is used to join two or more arrays and return a new array.It does not change the original arrays.
//syntax array1.concat(array2, array3, ...)
// let a = [1, 2];
// let b = [3, 4];

// let result = a.concat(b);

// console.log(result); // [1, 2, 3, 4]
// console.log(a);      // [1, 2] (unchanged)
// console.log(b);      // [3, 4] (unchanged)


// let x = [10, 20];
// let y = [30, 40];
// let z = [50, 60];

// let result = x.concat(y, z);

// console.log(result); // [10, 20, 30, 40, 50, 60]

//Adding values
// let arr = [2, 3];
// let result = arr.concat(4, 5, [34, 45])
// console.log(result); // output [ 2, 3, 4, 5, 34, 45 ]
// console.log(arr); // original array [ 2, 3 ]


