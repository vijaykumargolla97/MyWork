// if you are using classes the chances are high to be use constructor

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
};

module.exports = user;

/// dont run the code here we exports to 06classObjects.js


