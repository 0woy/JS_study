// JSON
// JavaScript object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name:'tori',
    color: 'white',
    size:null,
    birthDate: new Date(),
    jump: () =>{
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit,["name","color"]);
console.log(json);  // 함수는 obj의 data가 아니므로 포함x, JS에만 있는 특별한 data(symbol 등) 포함x

json = JSON.stringify(rabbit,(key, value) =>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie': value;  // 통제하고 싶을 떄 callback 사용
});
console.log(json);

// 2. JSON to Objcet
// parse(json)

console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) =>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump(); 
// 반환된 obj는 serialize 된 JSON으로 부터 다시 obj가 만들어진 것이기 때문에 함수는 포함X
// obj.jump(); 에러 발생, data들만 JSON으로 변환됨.

console.log(rabbit.birthDate.getDate());
// consolr.log(obj.birthDate.getDate()); 에러!, string이기 때문에 에러가 발생함. 

// 35 번째 줄 추가 후
console.log(obj.birthDate.getDate());