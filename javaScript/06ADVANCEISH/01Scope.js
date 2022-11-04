// manjority of the programing languages called {} this as a scope
// but javaScript doesn't  considered as a scope
// js considered 'fn' as a scope



// here we discuss let keyword insted of var 

// console.log(name);

var name = "vijay";
// this gives u undefined value but for backed programers need error

// if (true){
    // var lastname = "golla";
// 
// };
// console.log(lastname);
// result was good enough but console log is in out side of the scope

// if (true){
    // let lastname = "golla";
// 
// };
// console.log(lastname);
// it gives an error let key word cannot allow the out side of the scope

if (true){
    let lastname = "golla";

    console.log(lastname);
};
//  here the result is golla so let keyword do not allow outside of the scope