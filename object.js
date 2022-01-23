'use strict';

// Objects
// one of the JS's data types.
// a collection of related data and/or functionality.
// Nearly all obj in JS are instance of Object
// Object = {key : value} (집합체) 
// 즉, key : 접근 가능 변수, value: key가 갖고있는 값


// 1. Literals and properties
// 문제? 인자가 많아지게 되면 추가해야하는 게 많아짐,
// 관리하기도 힘들고 group화가 안됨
const name ='0woy';
const age =4;
print(name, age);

function print(name, age){
    console.log(name);
    console.log(age);
}

// solve
// 간편하게 data를 관리할 수 있음
const owoy = {name:'0woy', age: 22};
print(owoy);
function print(person){
    console.log(person.name);
    console.log(person.age);
}

// How to make?
// JS에서는 클래스가 없어도 괄호를 이용해서 obj를 만들 수 있음.
const ob1 = {};     //'object literal' syntax
const ob2 = new Object();   //'object constructor' syntax


// 타입이 runtime에 결정돼서 이런 미친짓도 가능....
//  뒤늦게 새로 추가할 수가 있어 -> 동적으로 코딩시에는 후에 유지보수가 힘들고 생각지 못한 에러 발생
owoy.hasJob = true;
console.log(owoy.hasJob);

//미친놈 삭제도 가능
delete owoy.hasJob;
console.log(owoy.hasJob);


// 2. Computed properties : 계산된 pro~, 실시간으로 원하는 key값을 가져오고 싶을때.
// coding하는 순간 key에 해당하는 값을 받을 때 . 사용
// key should be always string
//data 접근 방법: 2가지
console.log(owoy.name);
console.log(owoy['name']);

owoy['hasJob']=true;
console.log(owoy.hasJob);


// 아직 key에 무슨 값이 들어올진 코딩시점에는 알 지 못하는 상황.
function printValue(obj, key){  
  //  console.log(obj.key);   undefined 출력 key라는 pro가 없음
    console.log(obj[key]);  // 정상출력
}
printValue(owoy, 'name');   // key는 항상  string type로 전달
printValue(owoy, 'age');   
// 향후 동적으로 key 관련 value를 받아와야 할 때 유용하게 사용됨

// 3. Property value shorthand
//  obj를 필요할 때 일일히 만들게 되면 불가피하게 동일한 key, value 반복작성하는 문제점
// 함수를 이용해서 만들 수 있음.



const person1 ={name: 'bob', age:2};
const person2  ={name: 'steve', age:3};
const person3 ={name: 'dave', age:4};
// 손쉽게 한 obj를 만드는 법 지원
const person4 = new Person('elie', 30);
console.log(person4);
// JS에선 KEY, VALUE의 이름이 동일하다면 생략 가능.
// makePerson: template같은 친구 (class) -> class가 나오기 전에 사용된 방법
// 순수하게 obj만 사용하는 함수들은 대문자를 시작으로 만듦
//  return이 아닌 this로 작성, new를 붙여줌 걍 class 같이 만듦

// function makePerson(name, age){
//     return{
//         name,
//         age,
//     };
// }

// 4. Constructor function
function Person(name, age){
    // this= {};
    this.name=name;
    this.age = age;
    //return this;
}

// 5. in operator : property existence chek (key in obj)
console.log('name' in owoy);
console.log('random' in owoy); 

//  6. for..in vs for ..of 
// for (key in obj)

console.clear();
for (let key in owoy) {
    console.log(key);
}

//for (value of terable)
const array = [1,2,3,5];
for( let value of array){
    console.log(value);
}


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 . . .])
const user ={name:'ellie', age:'20'};
const user1 = user;
user1.name ='coder';
console.log(user);

//  old way
const user3 ={};
for(let key in user){
    user3[key] = user[key];
}
console.clear();
user3.name = "youna";
console.log(user3);
console.log(user);

const user4 ={};
Object.assign(user4, user);
// const user4 =Object.assing({}, user);
console.log(user4);

// another example
const f1={color: 'red'};
const f2 ={color: 'blue', size:'big'};
const mixex=Object.assign({},f1,f2);
// 앞과 동일한 속성이 있다면 뒤에 있는 애가 overwrite
console.log('mixed:', mixex);

console.clear();
let nam ='0woy';
console.log('hello '+nam);
console.log(`hello ${nam}`);
