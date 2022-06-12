
const STORE_KEY ="users";

function saveUser(user){
    let oldData=readUsers();//getting ls info
    oldData.push(user);
    let val= JSON.stringify(oldData);//creating the string
    // console.log(user);
    // console.log(val);
    
    localStorage.setItem(STORE_KEY,val);
}

function readUsers(){
    // get the values from the ls
    let data=localStorage.getItem(STORE_KEY)
    console.log(data); //JSON

    if(!data){//is no data?
        return []; //creating the array
    }else{
        let list=JSON.parse(data); //parsing JSON to obj
        console.log(list)
        return list;
    }
   

}