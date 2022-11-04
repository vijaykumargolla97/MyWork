const viz = () => {
  return " im one ";
};

// const rup = () => {
//     setTimeout(()=> {
//   return " im two";
//     },2000)
// };
// if i put async in line 5 // promise { undefined}


const rup = () => {
return new Promise((resolve,  reject) => {
  setTimeout(() => {
    resolve("im two");
  },2000);
});
};

const kot = () => {
  return " im three";
};

const callMe = async() =>{ // use async here 
    let valOne = viz();
    console.log(valOne);

    let valTwo =await rup(); // if  you use async in top you should definetly use the await keyword below

    console.log(valTwo);

    let valThree = kot();
    console.log(valThree);
};

callMe();
// im one 
// undefined
//  im three


// the above code is very fine and check in node once

