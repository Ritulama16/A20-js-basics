// console.log(typeof +"1")
// console.log([]===[])
// console.log("1"++"1")

// const apiResponse={
//     data:[
//         {
//             id:1,
//             name:"Shradddha",
//             isAdmin:false,
//             hasUserManagementAccess:false
//         },
//         {
//             id:"2",
//             name:"Saru",
//             isAdmin:false,
//             hasUserManagementAccess:false
//         },
//         {
//             id:3,
//             name:"Dikshen",
//             isAdmin:true,
//             hasUserManagementAccess:true
//         },
//     ],
//     responseCode:200,
//     responseMsg: "Users fetched successfully"
// };

//  const numbers=[1,2,3,4,5]

// const loopNumber=()=>{
//     numbers.map((num)=>{
//         if(num%2===0){
//         console.log(num)
//         }
//     });
// };

// const loopNumber =()=>{
//     numbers
//     .filter((num)=>num%2==0)
//     .map((num)=> {
//         console.log(num*2);
//     });
// };
// loopNumber();

const numbers =  [1,5,2,3,4,5,5];
const result = numbers
.filter(num => num !==5)
.map(  num => num*3);
console.log(result);


// create a function that use map and filter
// and find filter and find diffrent

const fruits = [
  "apple","banana","apple","mango","orange","grapes","apple","pineapple","kiwi","watermelon",];

const Fruit = () => {
  const results = fruits
    .filter((fruit) => fruit !== "apple")
    .map((fruit) => fruit.toUpperCase());

  return results;
};

console.log(Fruit());


// Filter
// Returns ALL matching elements

// Always returns an array

// Use when you need multiple results



// find()

// Returns ONLY the first matching element

// Returns a single value, not an array

// Stops searching after first match
