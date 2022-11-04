// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }
// // result =  0 1 2 3 4 5 6 7 8 9

// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// // result =  0 1 2 3 4 5 6 7 8 9 10

const myStates =[
"andrapradesh",
"delhi",
1997,
"tamil Nadu",
"assam",
"punjab"];


for(let v = 0; v <= myStates.length; v++) {
    // console.log(myStates[v]);
}
// andrapradesh
// delhi     
// 1997      
// tamil Nadu
// assam     
// punjab    
// undefined // undefined because = sign


for(let v = 0; v < myStates.length; v++) {
    // console.log(myStates[v]);
}
// andrapradesh
// delhi     
// 1997      
// tamil Nadu
// assam     
// punjab    
// now there is no undefined here

for(let v = 0; v < myStates.length; v++) {
    if(typeof myStates[v] !== "string") continue;
    // console.log(myStates[v]);
}
// andrapradesh, delhi, tamil Nadu, assam, punjab

for (let i = 0; i < myStates.length; i++) {
    if (typeof myStates[i] === "string") continue;
    // console.log(myStates[i]);
}
// 1997


for (let i = 0; i < myStates.length; i++) {
    if (typeof myStates[i] !== "string") break;
    console.log(myStates[i]);
}
// andrapradesh
// delhi
//rest of the other values are gone after string 

