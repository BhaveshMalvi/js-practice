// class user {
//     constructor(userName, email, passWord){
//         this.userName = userName;
//         this.email = email;
//         this.passWord = passWord
//     }

//     encryptPassword(){
//         return `${this.userName}`
//     }
//     capitalUserName(){
//         return `${this.userName.toUpperCase()}`
//     }
// }

const hero = new user("spyderman","spy@gmail.com", 123234);
console.log(hero);
// console.log(hero.encryptPassword());
// console.log(hero.capitalUserName());

// BEHIND

function user(userName, email, passWord) {
    this.userName = userName;
    this.email = email;
    this.passWord = passWord
}

user.prototype.encryptPassword = function (userName) {
    return `${this.userName}`
}
user.prototype.capitalUserName = function (userName) {
    return `${this.userName.toUpperCase()}`
    
}
const villan = new user("loky","loky@gmail.com", 1331217);
console.log(villan.encryptPassword());
console.log(villan.capitalUserName());
