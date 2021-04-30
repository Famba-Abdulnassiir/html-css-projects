const token = localStorage.getItem("token")
let msg = `<div></div>`

if(token === null){
    window.location.replace("login.html")
}

function signout(){
    localStorage.clear("token"); 
    window.location.replace("login.html")
}


function inbox(){
fetch("https://epicmail-sentongo-v2.herokuapp.com/api/v2/messages",{
    method:"GET",
    headers:{
        "content-type":"application/json",
        "Authorization":`Bearer ${token}`,
    }
}).then(response => response.json())

.then(data => {
    if(data.status == 200){
        let messages = data["data"]
        console.log(messages)
            messages.forEach(message => {
                dots="dots"+message.mail_id;
                moreText="more"+message.mail_id;
            msg +=`
            <div class="email" onclick="showDetials('${dots}','${moreText}')">
                    <p class="topic">${message.subject} <span id='${dots}'>.....</span></p>
                    <p id='${moreText}' style="display: none">${message.message_details}<br><br></p>
                    <p id='time'>${message.created_on}<br><br></p>
            </div>`
            
        });    
    } else if(data.msg ==="Token has expired"){
        window.location.replace("login.html")
    }else if(data.status == 404){
        window.location.replace("login.html")
    }
    
    document.getElementById("inbox").innerHTML = msg

})
 
}inbox()
