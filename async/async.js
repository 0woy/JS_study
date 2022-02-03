//2022.02.03.
'use strict';


// async, await
// clear style of using promise 

async function fetchUser(){
    //do network request in 10 secs...

    // state: pending why? resolve, reject를 호출하지 않았으므로.
    // return new Promise((resolve, reject) => {
    //     resolve('ellie');
    // });
    return '0woy';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

console.clear();


//2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple(){
    await delay(1000);
    return '🍎';
}
async function getbanana(){
    await delay(3000);
    return '🍌';
}

async function getPineapple(){
    await delay(2000);
    return '🍍';
}

async function getPeach(){
    await delay(1200);
    return '🍑';
}

//async+await -> channing
function getBanana(){
    return delay(1000)
    .then(() => '🍌');   
}

// promise도 channing을 하면 callback 지옥 체험 쌉가능
function pickFruits(){
   return getApple()
   .then(apple =>{ 
    return getbanana()
    .then(banana => `${apple} + ${banana}`);
   })
}



pickFruits().then(console.log);

// How to solve? 
async function pickFruits_solve(){
   const pineapple = await getPineapple();  //1sec
   const peach = await getPeach();          //1sec => 2sec : 비효율
    return `${pineapple} + ${peach}`;
}

pickFruits_solve().then(console.log);

//3. useful Promise APIs

//Promise.all
function pickAllFruits(){
    //
    return Promise.all([getApple(), getbanana(),getPineapple(),getPeach()])
    .then(fruits => fruits.join(' + '));

}
pickAllFruits().then(console.log);



//Promise.race
function pickkOnluOne(){
    return Promise.race([getPeach(),getPineapple(),getApple(),getbanana()]);
} 

pickkOnluOne().then(console.log);