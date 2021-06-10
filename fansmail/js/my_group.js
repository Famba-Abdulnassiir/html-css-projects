const token = localStorage.getItem("token")
let msg = `<div></div>`

if(token === null){
    window.location.replace("login.html")
}

function signout(){
    localStorage.clear("token"); 
    window.location.replace("login.html")
}


function myGroup(){
fetch("https://epicmail-sentongo-v2.herokuapp.com/api/v2/groups",{
    method:"GET",
    headers:{
        "content-type":"application/json",
        "Authorization":`Bearer ${token}`,
    }
}).then(response => response.json())

.then(data => {
    if(data.status == 200){

        data.data.forEach(group=> {            
                msg +=  `
                <div id="read">
                    <h5 id="header">Name: ${group.group_name}<span>......</span></span></h5>
                    <p id="body">Group id: ${group.group_id}</p>
                    <p>Sent on: Members: ${group.members}</p>
                </div>
                <hr>`
                
        });    
    } else if(data.msg ==="Token has expired"){
        window.location.replace("login.html")
    }else if(data.status == 404){
        msg += `<div>
        <p>You are not in any group yet!</p>
        </div>`
    }
    document.getElementById("inbox").innerHTML = msg

})

}myGroup()
