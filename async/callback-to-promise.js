'use strict';

// Callback Hell example
class UserStroage{
    loginUser(id, password){
        return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(
                    (id ==='0woy' && password === 'homer')||
                    (id === 'coding' && password === 'hard')
            ) {
                resolve(id);
            } else{
                reject(new Error('not found'));
            }
            }, 2000);
    });
}
    getRoles(user){
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(id ==='0woy'){
               resolve({name:'0woy', role:'admin'});
            }
            else{
                reject(new Error('no access'));
            }
            },1000);
        });
    }
}



const userStorage = new UserStroage();
const id  = prompt('enter your id'); 
const password  = prompt('enter your password'); 

userStorage
.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert( `Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);