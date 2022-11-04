// function init() {
//     var myname ="vijaykumar";
//     console.log("i am me");

//     function saymyname() {
//         console.log(myname);
//     }
//     return saymyname;// use  return  keyword 
// };

// //  init(); // Don't run code like this  use sum var keyword

// var value = init(); // in it has exicuted but has nothing to print right now
// // so ve need to give somethig for init, so add a console.log in line no 3.
// // / you will get 'i am me' its only reflects 3rd line code 
// // / carefully observe here firstname is  not take into a part

// value(); // vijaykumar



// we will see another method 



function doAddition(v) {
    return function(y){
        return v + y;

    }
    
}

var add = doAddition(7);
console.log(add(3)); // result is '10'


console.log(doAddition(5)(7)); // result is 12,
//  here it assumes 5 as v and 7 as ;