// const names = [
// "youtube",
// "facebook",
// "Instagram",
// "Netflix",
// "Amazon"];

// for(const n of names ) {
//     console.log(n);
// }
// // youtube
// // facebook 
// // Instagram
// // Netflix  
// // Amazon   


const names ={ 
   yt: "youtube",
   fb: "facebook",
   ig:  "Instagram",
   nt: "Netflix",
   az: "Amazon",
   v7: "vijay1997"
}

// for (const n in names) {
// console.log(n);
// }
// yt
// fb
// ig
// nt
// az
// v7

// for (const n in names) {
//     console.log(names[n]);
// }
// // youtube
// // facebook 
// // Instagram
// // Netflix  
// // Amazon   
// // vijay1997


for (const n in names) {
    console.log(`index is: ${n} and values is:${names[n]} `);
}
// index is: yt and values is:youtube 
// index is: fb and values is:facebook  
// index is: ig and values is:Instagram 
// index is: nt and values is:Netflix   
// index is: az and values is:Amazon    
// index is: v7 and values is:vijay1997 


for (const n in names) {
    console.log(`${n} is: ${names[n]}`);
}
// yt is: youtube
// fb is: facebook 
// ig is: Instagram
// nt is: Netflix  
// az is: Amazon   
// v7 is: vijay1997


