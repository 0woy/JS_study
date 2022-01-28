'use strict';

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('|');    // 구분자를 넣을 수 있음.
    console.log(result);
}
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(', ');
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);     // 배열 자체를 변화시킴
}
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    // const result = array.splice(2,3);   // 삭제한 것을 return
    // console.log(result);
    

    // 우리는 array를 변형하는 것이 아닌 새로운 array를 만들어야 함으로 splice 쓰면 안 됨
    const res = array.slice(2,5);
    console.log(res);
    console.log(array);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
      const result = students.find(function (student) {
        //  true를 만나면 당장 멈추고 return., false이면 다음 요소로 넘어감.
         return student.score === 90;
      });

    //  const result = students.find((student) => student.score === 90);
      console.log(result);
  }
  
  // Q6. make an array of enrolled students
  {
      const result= students.filter((student) => student.enrolled);
     console.log(result);

  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      const result = students.map((student) => student.score);
      console.log(result); 
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
      console.clear();
      const result = students.some((student) => student.score <=50) // 하나라도 조건에 만족하면 true, OR
      console.log(result);

      const result2 = students.every((student) => student.score <=50); // 모두 조건이 충족해야 true, AND
      console.log(result2);
  }
  
  // Q9. compute students' average score
  {
    //    prev: return 값이 다음 호출때  prev , reduce: 누적함
     const result = students.reduce((prev, curr) =>  prev+curr.score, 0); // 초기값을 0으로 설정.
     console.log(result / students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result = students
    .map((student) => student.score)
    .join();
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
      const result = students
      .map((student) => student.score)
      .sort((a,b) => a-b)
      .join();
      console.log(result);

  }