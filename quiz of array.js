'use strict';

//// Q1. make a string out of an array
{const fruits = ['apple','banana','orange'];
let str_fruits = fruits.toString();
console.log(str_fruits);
}
// Q2. make an array out of a string
{
  const fruits ='🍎, 🥝, 🍌, 🍒';


}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const array1= array.reverse();
    console.log(array1);

}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const array1 = array.splice(2,3);
    console.log(array1);
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
   for(let i=0;i<students.length;i++){
       if(students[i].score!=90)
        continue;
       else
        console.log(students[i].name);
   }
}

// Q6. make an array of enrolled students
{
    let array = new Array();
    for(let num of students){
        if(!num.enrolled)
        continue;
        else   
        array.push(num.name);
    }
    console.log(array);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    let scores =  new Array();
    for(let std of students){
        scores.push(std.score);
    }
    console.log(scores);
}

// Q8. check if there is a student with the score lower than 50
{
    for(let std of students){
        if(std.score>=50)
        continue;
        else{
        console.log(std.name);
            break;
    }
}

}
// Q9. compute students' average score
{
    let sum =0;
    for(let std of students){
        sum+=std.score;
    }
    let avg = sum/students.length;
    console.log(`average score = ${avg}`);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    let scores =  new Array();
    for(let std of students){
        scores.push(std.score);
    }
    let str_score = scores.toString();
    console.log(`score_array to score_string = ${str_score}`);
    str_score =scores.sort().toString();
    console.log(str_score);
}

//  sort practice
{
    console.clear();
    let arr = [1,4,6,132,62,32,11, 93, 7];
    console.log(arr);
    arr.sort(function(curr,prev){

       return curr-prev;
  
    }); // 앞자리 수만 보고 sorting
    console.log(arr);

}