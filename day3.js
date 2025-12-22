const arr1 = [1,2,3];
const arr2 = [4,5,6];
// console.log(arr1+arr2);

// spread operator...

const mergedArr = [...arr1,...arr2];
// console.log(mergedArr);

// const mergedArray = (a,b) => {
//     const result = [...a,...b];
//     return result;
// };
const mergedArray = (a,b) =>  [...a,...b];
// console.log(mergedArray(arr1,arr2));

const mergedArray1 = (a,b) =>  [...a,...b];
// console.log(mergedArray(arr1,arr2,arr1,arr2));

// const person = {
//     name : "swayam",
//     age : 18,
// }

// const newPerson = {
//     ...person,
//     age:21,
// }
// console.log(newPerson);

// const personDetail=(name,age)=>{
//     const person = {
//         name:name,
//         age,
//     };
//     return person;
// };


const personDetail=(name,age)=>({name,age});
console.log(personDetail("Ritu",21));


