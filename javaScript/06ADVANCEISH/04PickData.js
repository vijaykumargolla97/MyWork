const user = ["vijay", 7, "student"];
// var role = user[2];
// var name = user[0];
// var courseCount = user[1];
// 
// console.log(role);
/// student


// var [name, courseCount,role] = user;
// 
// console.log(role); // student
// console.log(courseCount); // 7


const myUser = {
    name: "vijay",
    age: 24,
    role: "student",
};
console.log(myUser.age); //24


const {myname, age, role } = myUser;
console.log(myname);
// undefined
// wt really happend here name and my name r not matched 
console.log(role);
// student

/// destructuring make sure the name exactly same s