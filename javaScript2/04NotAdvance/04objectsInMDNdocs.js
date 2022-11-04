// only reason for this class is objects from MDN docs 
// to do google "objects from MDN docs"
// you will get source from there, plzz read and try to use those

var User  = {
    name: "",
    getUserName: function(){
            console.log(`user name is: ${this.name}`);
    },

};

var vijay = Object.create(User);
console.log(vijay); // {}

vijay.getUserName(); //  name is empty here  so we need to name in line 18

vijay.name = "vijaykumar";

vijay.getUserName();
//  result is " vijaykumar"


// another method

var viz = Object.create(User, {
    name: {value: "vizay"},
    age: {value: 24},
});

viz.getUserName(); // vizay
