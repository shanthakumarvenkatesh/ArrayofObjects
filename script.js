let studentRecords = [{ name: 'John', id: 123, marks: 98 },
{ name: 'Baba', id: 101, marks: 23 },
{ name: 'yaga', id: 200, marks: 45 },
{ name: 'Wick', id: 115, marks: 75 }]
// <!-- "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps. -->

    // <!-- ['JOHN', 'BABA', 'YAGA', 'WICK'] -->
    // let a=( studentRecords[0].name)
    // let b=( studentRecords[1].name)
    // let c=( studentRecords[2].name)
    // let d=( studentRecords[3].name)
    // let arr=[];
    // arr.push(a,b,c,d);
    // const result = arr.map(name => name.toUpperCase());
    // console.log(result);
//  "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]
// let key = 'marks'
//
// let a=studentRecords.filter(item=>item[key]>50)
// console.log(a);
// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.
// let key = 'marks'
// let i= 'id'
// let a=studentRecords.filter(item=>item[key]>50).filter(item=>item[i]>120)
// console.log(a);
// Question 4: Consider the same scenario we have discussed above, but this time we would like to know 
// the sum total of the marks of the students.

// const total = studentRecords.map(item => item.marks).reduce((prev, curr) => prev + curr, 0);
// console.log(total);
// Question 5: This time we want to get only the names of the students 
// who scored more than 50 marks from the same dataset used above.

// let key = 'marks'
// let a=studentRecords.filter(item=>item[key]>50).map(item => item.name);
// console.log(a);

// Question 6: This time we are required to print the sum of marks of the students with id > 120.

// let key = 'marks'
// let i= 'id'
// let a=studentRecords.filter(item=>item[i]>120).map(item => item.marks).reduce((a, b) => a + b, 0);
// console.log(a);




// Question 7: This time we are required to print the total marks of the students with marks greater than 50 
// after a grace of 15 marks has been added to those students who scored less than 50.


// let totalmarks=studentRecords.map((value)=>{
//     if(value.marks<50){
//         value.marks +=15;
//     }
//     return value;
//  })
// .filter((value)=>value.marks>50).reduce((acc,cur)=>acc+cur.marks ,0)
// console.log(totalmarks)
// Create 6 objects , each object will have name, class, roll no as properties.
//  Store these objects in an array of objects. 

// let obj1={
//     name:'shanth',
//     class:1,
//     rollno:1
// }
// let obj2={
//     name:'shanth',
//     class:1,
//     rollno:1
// }
// let obj3={
//     name:'shanth',
//     class:1,
//     rollno:1
// }
// let obj4={
//     name:'shanth',
//     class:1,
//     rollno:1
// }
// let obj5={
//     name:'shanth',
//     class:1,
//     rollno:1
// }
// let obj6={
//     name:'shanth',
//     class:1,
//     rollno:1
// }
// let arr=[]
// arr.push(obj1,obj2,obj3,obj4,obj5,obj6)
// console.log(arr);


















