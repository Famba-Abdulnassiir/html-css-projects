const token = localStorage.getItem("token")
let msg = `<div></div>`

if(token === null){
    window.location.replace("login.html")
}

function signout(){
    localStorage.clear("token"); 
    window.location.replace("login.html")
}


function sentMail(){
fetch("https://epicmail-sentongo-v2.herokuapp.com/api/v2/messages/sent",{
    method:"GET",
    headers:{
        "content-type":"application/json",
        "Authorization":`Bearer ${token}`,
    }
}).then(response => response.json())

.then(data => {
    if(data.status == 200){

        data.data.forEach(message => {            
                msg +=  `
                <div id="read">
                    <p id="header">${message.subject}<span>......</span></span></p>
                    <p id="body">${message.message_details}</p>
                    <p>Sent on: ${message.created_on}</p>
                </div>
                <hr>`
                
        });    
    } else if(data.msg ==="Token has expired"){
        window.location.replace("login.html")
    }else if(data.status == 404){
        msg += `<div>
        <p>No Records yet</p>
        </div>`
    }
    document.getElementById("inbox").innerHTML = msg

})

}sentMail()
