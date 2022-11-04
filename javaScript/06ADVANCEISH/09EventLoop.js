const viz = () => {
    console.log("im one");
};

const rup = () => {
    setTimeout(()=> {
console.log("wooohooo");
    },2000)
    console.log("im two");
};

const kot = () => {
    console.log("im three");
};

const jan = () => {
    console.log("im four");
};


viz(); // im one
rup(); // im two 
kot(); // im three
jan(); // im four
// we will add a 
// after 2 sec its shows wooohooo // reference line no 6 to 8
// here we called in 2nd condition but it  loads @ last
// this only happens JavaScript is completes the task which is in the anybobdy in the que
// so wooohoo prnts late than remaining conditions
