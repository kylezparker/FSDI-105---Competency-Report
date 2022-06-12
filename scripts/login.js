function login(){
//get the values from the form
let inputEmail= $(`#txtEmail`).val();
let inputPass= $(`#txtPassword`).val();

//use a flag
let flag=false;

//get the users from LS
let userList= readUsers();//from storemanager

//TRAVEL THE USER LIST
for(let i=0;i<userList.length;i++){
    let user=userList[i];
    if(user.email==inputEmail && user.password==inputPass){
        flag=true;
        window.location="users.html";
    }
    if(!flag){
        $("#alertError").removeClass("hide");
        setTimeout(function(){
            $("#alertError").addClass("hide");
        },3000);
    }
}
//compare email and password
}
function init(){
$("#btnLogin").click(login);
}
window.onload=init;