'use strict';

// JavaScript is synchronous
// Execute the code block in order after hoisting
// hoising: var, function declaraion

console.log('1');
setTimeout(function () {
    console.log('2');
},1000);
console.log('3');

// Synchronous callback
function printImmediately(print){
    print();
}

printImmediately(() => {    console.log('hello');   });

// Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => { console.log('async callback');} , 2000);
// console.clear(); 

// Callback Hell example
class UserStroage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
        if(
                (id ==='0woy' && password === 'homer')||
                (id === 'coding' && password === 'hard')
        ) {
            onSuccess(id);
        } else{
            onError(new Error('Not Found'));
        }
        }, 2000);
    }

    getRoles(user, onSuccess,onError){
        setTimeout(() => {
            if(user ==='0woy'){
                onSuccess({name:'0woy', role:'admin'});
            }
            else{
                onError(new Error('no access'));
            }
        });

    }
}

// id, password 입력 받기

const userStorage = new UserStroage();
const id  = prompt('enter your id'); 
const password  = prompt('enter your password'); 

userStorage.loginUser(
    id, 
    password,
    (user) => {
        userStorage.getRoles(
            user, 
            (userWithRole) =>{
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            (error) => { console.log(error);}
        )
    },
    (error) =>{console.log(error);}
    
);
// login 하기