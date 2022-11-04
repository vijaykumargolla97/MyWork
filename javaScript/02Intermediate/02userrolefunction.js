/* 
Define a function that can answer the role of a user.
A user can be on following roles:

admin - gets full access
 subadmin - get access to create/delete courses
 testprep - get access to create/delete courses
 user - gets access to consume content
 other - trail user.

 Input: getUserRole(name, role)
 */

//  var getUserRole = function (name, role)
 function getUserRole(name, role) {

    switch(role) {
        case "admin":
            return `${name} is admin with all access`
            break;
        case "subadmin":
            return `${name} is subadmin with access to create and delete courses`
            break;
        case "testprep":
            return `${name} is a testprep with access to create and delete tests`
            break;
        case "user":
            return `${name} is a user with consume content`
            break;

            default:
                return `${name} is a trailuser`
                break;
    }
    
 }

console.log(getUserRole("vijay", "user"));

// var getRole = getUserRole("vijay","testprep");
// console.log(getRole);





