'use strict';

// Array

// 1. Decalration
const arr1 = new Array();
const arr2 =[1,2];

//2. Index position
const fruits = ['๐','๐'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);

// 3. Looping
// print all fruits
console.clear();
for(let key of fruits){
    console.log(key);
}
console.clear();

// c. forEach
// anonymous function: Arrow function ์ฌ์ฉ๊ฐ๋ฅ.
// for each: ๋ฐฐ์ด์์ ๋ค์ด์๋ value๋ค ๋ง๋ค ๋ด๊ฐ ์ ๋ฌํ ํจ์ ์ถ๋ ฅ
fruits.forEach((key, index) =>    console.log(key, index));

// 4. Add, deletion, copy
// push: add an item to the end
console.clear();
fruits.push('๐ฅ', '๐ฅ');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('๐ง','๐ฅฉ');
console.log(fruits);

// delete an item to the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push

// splice: remove an item by index position
fruits.push('๐ณ','๐');
console.log(fruits);
fruits.splice(0,1);
console.log(fruits);

fruits.splice(2,1,'๐ง','๐');
console.log(fruits);
fruits.splice(0,3);
console.log(fruits);

// combine two arrays
const fruits2 =['๐ฅจ','๐ฅฎ'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('๐'));
console.log(fruits.indexOf('๐ณ'));

// includes: boolean

// lastIndexOf
console.clear();
fruits.push('๐ณ');
console.log(fruits);

console.log(fruits.indexOf('๐ณ'));
console.log(fruits.lastIndexOf('๐ณ'));


