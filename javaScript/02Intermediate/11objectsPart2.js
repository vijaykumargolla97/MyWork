var user = {
    firstName: "vijaykumar",
    lastName: "golla",
    age: 24,
    role: "student",
    verifiedUser: true,
    cousreList: [],
    buyCourse: function (courseName) {
        this.cousreList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.cousreList.length} courses`;        
    },
};

var cousreList =true;
console.log(user.firstName);
console.log(user.getCourseCount());
// vijaykumar is enrolled in total of 0 courses

user.buyCourse("html");
user.buyCourse("css");
console.log(user.getCourseCount());
// vijaykumar is enrolled in total of 2 courses



