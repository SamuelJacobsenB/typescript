"use strict";
function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}
;
console.log(soma(5));
function newUser(user, password, name) {
    console.log(`User: ${user}, password: ${password}, name: ${name == undefined ? 'Name is not defined' : name}`);
}
;
newUser('myUserNames', 'password123', 'Samuel');
