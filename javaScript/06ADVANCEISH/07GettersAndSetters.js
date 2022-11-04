class user{
    constructor(name, email) {
        this.name = name;
        this.email = email;

    };
    #courseList = [];
    getInfo(){
        return {name: this.name, email: this.email};
    }
    enrollCourse(name) {
        this.#courseList.push(name);
    }
    getCourseList(){
        return this.#courseList;
    }
};

module.exports = user;


const  thor = new user("thor", "thor@thunder.com");
console.log(thor.getInfo()); // { name: 'thor', email: 'thor@thunder.com' }
thor.enrollCourse("Angular Bootcamp");
console.log(thor.getCourseList()); // [ 'Angular Bootcamp' ]
console.log(thor.courseList); // [ 'Angular Bootcamp' ]
// here the log(getCourseList) nd log(CourseList) are giving the same results

//  line no 11 to 13 are setters
// line no  14 to 26 are setters


// reffering # in line no 7, 12, 15 
console.log(thor.courseList); //  you will get undefined here
// some times you r not access directly




