
const vijay ={
    firstName: "vijaykumar",
    lastName: "golla",
    role: "student",
    courseCount: 3,
    getInfo: function () {
        console.log(`
        first name is ${this.firstName}
        last name is ${this.lastName}
        his role is ${this.role}
        and he studying ${this.courseCount} courses
        `);
    }
};


const vj = {
    firstName: "vijay",
    lastName: "vj",
    role : "god",
    courseCount: 7,
};

// // this binding method is really gonna help u alot
// vijay.getInfo.bind(vj); // by default  bind pointout the vijay here so i give a parameter here 'vj'
// // result is nothing 

vijay.getInfo.bind(vj)(); // be aware of this bind always gives a reference back
//  result is 
//   first name is vijay      
// last name is vj
// his role is god
// and he studying 7 courses

// one more simple method is 

var vjInfo  = vijay.getInfo.bind(vj);
vjInfo();
// u 'll get d same ans again


// we will try call method
vijay.getInfo.call(vj);
// u 'ii get exact same answer 
// 'bind' gives u a referrence back but 'call' is dirrectley calls it

