'use strict';

// Array

// 1. Decalration
const arr1 = new Array();
const arr2 =[1,2];

//2. Index position
const fruits = ['🍅','🍕'];
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
// anonymous function: Arrow function 사용가능.
// for each: 배열안에 들어았는 value들 마다 내가 전달한 함수 출력
fruits.forEach((key, index) =>    console.log(key, index));

// 4. Add, deletion, copy
// push: add an item to the end
console.clear();
fruits.push('🥕', '🥝');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🧇','🥩');
console.log(fruits);

// delete an item to the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push

// splice: remove an item by index position
fruits.push('🍳','🍘');
console.log(fruits);
fruits.splice(0,1);
console.log(fruits);

fruits.splice(2,1,'🧈','🍛');
console.log(fruits);
fruits.splice(0,3);
console.log(fruits);

// combine two arrays
const fruits2 =['🥨','🥮'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍘'));
console.log(fruits.indexOf('🍳'));

// includes: boolean

// lastIndexOf
console.clear();
fruits.push('🍳');
console.log(fruits);

console.log(fruits.indexOf('🍳'));
console.log(fruits.lastIndexOf('🍳'));


