'use strict';

//Object-Oriented programming
//class: template
// object: instance of class

// JS classes
// inroduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person{
    // constructor: 생성자, 나중에 object를 만들 때 필요한 data를 전달받음.
    constructor(name,age){
        //fields: 전달 받은 data를 할당
        this.name=name;
        this.age = age;
    }
    //method
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const youna = new Person('윤아', 22);
console.log(youna.name);
console.log(youna.age);
youna.speak();

// 2. Getter & Setters
class User{
    constructor(fisrtName, lastName, age){
        this.fisrtName=fisrtName;
        this.lastName=lastName;
        this.age=age;
    }
    //우리가 get을 정의하는 순간 생성자의 this.age는 memory에 올라가있는
    // data를 읽어오는 것이 아닌 getter를 호출함.
    get age(){
        return this._age;
    }

    // set을 정의하는 순간 (this.age)=age, 값을 할당할 때 메모리에 값을 할당하는 것이 아닌
    // setter를 호출함 = setter 안에서 전달된 value를 age에 할당할 때 
    // memory의 값을 update하는 것이 아닌 setter를 다시 호출 = 무한정 반복하게 되므로
    // call stack exceed 에러가 발생함.

    // How to 방지? age -> _age
    // 이러면 User라는 class 안에는 3개의 field: firstName, lastName, _age
    set age(value){
        // 공격적으로 딴지 걸기
        // if(value<0){
        //     throw Error('age can not be negative');
        // }

        // gentle한 딴지
        this._age=value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job',-1);
// 사용자가 바보같이 사용할 때 방어적으로 해주는 게 getter, setter.
console.log(user1.age);

// field는 _age가 있지만 우리가 .age라고 호출, 할당할 수 있는 것은
// 내부적으로getter,setter를 이용하기 때문!!

// 3. Fields(public, private)
// Too soon! 매우 최근에 추가되어서 잘 쓰고 있지는 않음

class Experiment{
    publicField=2;

    // class 내부에서만 접근 변경 가능
    #privateField=0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


// 4. Static properties and method
//Too soon!

class Article{
    static publisher = 'Dream coding';
    constructor(articleName){
        this.articleName=articleName;
    }

    static prinPublisher(){
        console.log(Article.publisher);
    }
}

// 5. Inheritance
//  a way for one class to extend another class.
class Shape{
    constructor(width, height, color){
        this.width=width;
        this.height=height;
        this.color=color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    
    getArea(){
        return this.width*this.height;
    }
}


// Shape에서 정의된 field, method 포함됨
class Rectangle extends Shape{}
class Triangle extends Shape{

    draw(){
        super.draw();
        console.log('this is triangle');
    }

    // overriding: 재정의
    getArea(){
        return (this.width*this.height)/2;
    }
    toString(){
        return `Triangle, color:${this.color}`;
    }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());
console.log(rectangle.getArea());


// 6. Class checking : instanceOf 
//  class를 이용해서 만들어진 새로운 istance
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
//  모든 object, class는 JS의 Obj를 상속 
console.log(triangle instanceof Object);
console.log(triangle.toString());

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference