// constructor
function User(email,password,fname,lname,age,address,phone,payment,color){
    this.email=email;
    this.password=password;
    this.firstName=fname;
    this.lastName=lname;
    this.age=age;
    this.address=address;
    this.phone=phone;
    this.payment=payment;
    this.color=color;
    }
 

        function isValid(user){
            //return false when user is not valid, return true when user is valid
            //remove console logs
            let valid=true;
            if(user.email.length==0){
                valid=false;
                console.log("please fill out the field: email");
                $("#txtEmail").addClass(`input-error`);
            }
            if(user.password.length<6){
                valid=false;
                console.log("please fill out the field: password");
                $("#txtPassword").addClass(`input-error`);

            }
            if(user.firstName.length==0){
                valid=false;
                console.log("please fill out the field: first name");
                $("#txtFirstName").addClass(`input-error`);

            }
            if(user.lastName.length==0){
                valid=false;
                console.log("please fill out the field: last name");
                $("#txtLastName").addClass(`input-error`);

            }
            return valid;
        }
        
        // user.password=="" test for empty
    //register function
    function register(){
        let userName= $("#txtEmail").val();
        let userPass= $("#txtPassword").val();
        let userFirstName= $("#txtFirstName").val();
        let userLastName= $("#txtLastName").val();
        let userAge= $("#txtAge").val();
        let userAddress= $("#txtAddress").val();
        let userPhone= $("#txtPhone").val();
        let userPayment= $("#txtPayment").val();
        // try docbyId
        let userColor= $("#txtColor").val();
    
        // email,password,first name,last name,age,address,phone,payment,color
    
        // console.log(userName,userPass,userFirstName,userLastName,userAge,userAddress,userPhone,userPayment,userColor);
        // creating the object
        let newUser=new User(userName,userPass,userFirstName,userLastName,userAge,userAddress,userPhone,userPayment,userColor);
        // if(validatePass(userPass)){
        if(isValid(newUser)==true){
            saveUser(newUser);
            $('input').val("");
            // console.log(newUser);
            hideError();
            // maybe target ids in function called clearError to deal with issue
            $("input").addClass(`input-clear`)
        }else{
            displayError("Please complete all fields");
        }
    }
    function displayError(msg){
        $("#alertError").removeClass("hide").text(msg);
    }
    function hideError(){
        $("#alertError").addClass("hide");
    }
      
    

    function validatePass(){
        //get the value of the pass
        console.log("validateing")

        let txtPass=$("#txtPassword");
        // console.log(txtPass);
        let password=txtPass.val();
        if(password.length<6){
            txtPass.css("background","#ff9898");
            console.log("the password is too short");
            displayError("the password is too short");
        }else{
            txtPass.css("background","#64cc66");
            hideError();

        }
        // if(pass.length < 6){
        //     console.log("lengthen password")
        // }
        // else{
        //     return true;
        // }
        //test against parameters
    }
    
    
    
    
    
    
    
    function init(){
    console.log("reg");
    //hook events
    $("#btnRegister").click(register);
    $("#txtColor").keypress(function(e){
        if(e.key=="Enter"){
            register();
        }
        // console.log(e.key);
    });
    $("#txtPassword").keyup(validatePass);//val every time key is up
}
    window.onload=init;

    // shorthand. $("#txtEmail").hide() vs document.get......style.display="none"


    // // practice. register function without jquery, must also clear form with jquery.
    // function register2(){
    //     let userName=document.getElementById("txtEmail").value;
    //     // repeat ^ then 
    //     let user1=new User(userName,1,1,1,1,1,1,1,1);
    //     users.push(user1);
    //     console.log(users);
    //     clearForm();
    // }
    // function clearForm(){
    //     document.getElementById("txtEmail").value=``;
    //     // repeat

    // }





    // // email,password,first name,last name,age,address,phone,payment,color
    // function register3(){
    //     let userName=$(`#txtEmail`).val();
    //     let userFirstName=$(`#txtFirstName`).val();
    //     let userLastName=$(`#txtLastName`).val();
    //     let user1=new User(userName,1,userFirstName,userLastName,1,1,1,1,1);
    //     console.log(user1);
    //     $(`input`).val(``);

        
    // }


    //apply what we have been learning to petSalon


    //comment