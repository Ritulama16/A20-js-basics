//const collegeName = "techspire"
// console.log(typeof collegeName);

// const collegeName= ["Aashna","Prashna","Prerna"];
//const name ={
//  id: 1,
//    firstname: "Aashna",
//   colleges: collegeName,
//};
//console.log(collegeName[2]);
//console.log(name.firstName);

const students = ["bikesh","suresh","lokesh","Mahesh"];
console.log(students.length);

const collegeDetails = {
    name:"techspire",
    section: 20,
    students: students,
    award: null,
};
// console.log(Object.values(collegeDetails));
// console.log(collegeDetails.students[3]);

getStudentName();
function getStudentName(){
    console.log("i am normal func");
}

getCollegeName();
const getCollegeName = () => {
    console.log("i am arrow func");
};

// console.log(abc);
// var abc = "hari";
const getName= () => {
    console.log("hi,{name}");
};
getName("babish");