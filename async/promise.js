'use strict';

// Promise is a JS object for asynchronous operation
// State: pending -> fulfilled or rejected
// Producer  vs Consumer

// 1. Producer
// when new promise is created, the executor runs automatically.

//Promise obj 만들기
const promise = new Promise((resolve, reject) => {
    //doing some heavy work(network, read files)
    console.log('do something...');

    setTimeout(()=>{
        // 성공적 기능 수행시, 가공한 data를 resolve(call back function)를 이용하여 전달
        // resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});


// 2. Consumers: then, catch, finally(값을 받아오는 방법)

promise 
    .then((value) =>{
    // value: resolve에서 전달된 값.
    console.log(value);
})
    .catch(error => {
    console.log(error);
})
// then: 똑같은 promise를 return, return된 promise에 catch를 등록해서 수행되는 것.
// 이렇게 엮은 것들이 chaning
.finally(()=>{
    console.log('finally');
});

// 3. Promise Chaining

// get number from server: 1초 후에 숫자를 전달하는 promise
const fetchNumber = new Promise((resolve, reject) =>{   
    setTimeout(() => resolve(1) ,1000);
});

// then은 값을 전달할 수도 있고 또 다른 비동기인 promise를 전달해도 됨.
fetchNumber
.then(num => num *2)
.then(num => num *3)
.then(num => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=> resolve(num-1),1000);
    });
})
.then(num => console.log(num)); //총 2sec후 출력

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) =>{
        setTimeout(() => resolve('🎅'),1000);
    }); 
const cook = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 👨‍🍳`),1000);
    });
const meal = cook =>
    new Promise((resolve, reject)=>{
        setTimeout(() => resolve(`${cook} => 🧛‍♀️`),1000);
    });

getHen()
.then(cook)
.then(meal)
.then(console.log);


