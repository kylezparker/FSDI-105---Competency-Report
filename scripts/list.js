// this function needs an array
function displayUsers(usersArray){
    let row;
//travel the array, for loop
    for(let i=0;i<usersArray.length;i++){
        let user=usersArray[i];
        console.log(user);
        //create the row = `<>${} <>`
        row=`<tr>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.email}</td>
                <td>${user.age}</td>
                <td>${user.address}</td>
                <td>${user.phone}</td>
                <td>${user.payment}</td>
                <td style="background-color:${user.color};font-weight:600;letter-spacing:2px;">${user.color}</td>
                </tr>`;
                $(`#users`).append(row);
    }
   

//append the row to the table
}
function init(){
    console.log("listing users");
    let users= readUsers();//getting the array

    // is an arry
    displayUsers(users);
}
window.onload=init;