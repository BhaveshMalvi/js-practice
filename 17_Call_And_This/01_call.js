// CALL APPLY KEYWORD.
// THIS = CURRENT EXECUTION CONTEXT. BYDEFAULT Function K ANDER function 


function setUsername(userName){
    this.userName =  userName;
    console.log("Called");
}

function createUser(userName, email, passWord){
    // setUsername(userName) call hua heee par values pass nahi hui bhai.....
    setUsername.call(this, userName);
    this.email = email;
    this.passWord = passWord;

}   

const code = new createUser("bhavesh", "bman@xx.com", "131217");
console.log(code);
console.log(this);