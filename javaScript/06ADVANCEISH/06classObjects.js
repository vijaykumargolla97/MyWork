//in some situations we used mrthod like this 
// export must be like this 
// export class user(){
// }
// import user from "./06classjs";

// here all good we used an another method


const user = require("./06classjs");

const vijay = new user("vijay", "vijayroyals12@gmail");
console.log(vijay.getInfo());
// { name: 'vijay', email: 'vijayroyals12@gmail' }
console.log(vijay.getInfo().name); // vijay
console.log(vijay.getInfo().email); // vijayroyals12@gmail

vijay.enrollCourse("React bootcamp");
vijay.enrollCourse("Angular bootcamp");

console.log(vijay.getCourseList()); // [ 'React bootcamp', 'Angular bootcamp' ]

let courses = vijay.getCourseList();
courses.forEach((c) => console.log(c));
///React bootcamp
/// Angular bootcamp
/// we used for each loop in above line of code
