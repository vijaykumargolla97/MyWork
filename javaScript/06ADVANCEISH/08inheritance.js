class user{
    constructor(name, email) {
        this.name = name;
        this.email = email;

    }
    courseList = [];
    getInfo(){
        return {name: this.name, email: this.email};
    }
    enrollCourse(name) {
        this.courseList.push(name);
    }
    getCourseList(){
        return this.courseList;
    }
    login() { 
        return "you are logged in";
    } // if you use static keyword before login you wont access the login
    
};

class SubAdmin extends user{
    constructor(name, email){
        super(name, email); // lets read about super keyword
    }
getAdminInfo(){
    return "I am Subadmin";
}
login(){
    return "login for admin only";
}
};

// module.exports =  user

const tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo()); // I am Subadmin
console.log(tom.login()); // you are logged in

console.log(tom.getInfo()); // { name: 'tom', email: 'tom@jerry.com' }

// we all need privacy //
// all we need to do create a login method in line no 29
