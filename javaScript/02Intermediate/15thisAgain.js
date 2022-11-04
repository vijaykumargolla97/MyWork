// console.log(this);
// // result is '{}'


// var user = {
//     name: "vijaykumar",
//     age: 24,
//     getDOB: function () {
//         console.log("line 9", this);
//     }
// }
 
// // user.getDOB();
// // line 9 { name: 'vijaykumar', age: 24, getDOB: [Function: getDOB] }



var user = {
    name: "vijaykumar",
    age: 24,
    getDOB: function () {
        console.log("line 9", this);
        function greet() {
            console.log("hii V7");
            console.log("line 25", this); // here this wont get entire objects 
        }
        greet();
    
    }
}
 
user.getDOB();

// line 9 { name: 'vijaykumar', age: 24, getDOB: [Function: getDOB] }
// line 25 <error>. its calls window function because 
// for all regular calls, this points to windows object
