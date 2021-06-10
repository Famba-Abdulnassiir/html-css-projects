const email = document.getElementById("email")
const subject = document.getElementById("subject")
const message = document.getElementById("message")
const token = localStorage.getItem("token")

if(token === null){
    window.location.replace("login.html")
}

function signout(){
    localStorage.clear("token"); 
    window.location.replace("login.html")
}

function sendEmail(){

    fetch("https://epicmail-sentongo-v2.herokuapp.com/api/v2/messages",{
        method:"POST",
        headers:{
            "content-type":"application/json",
            "Authorization": `Bearer ${token}`
        },        
        body:JSON.stringify({
                "subject":subject.value,
                "parent_message_id":0,
                "sender_status":"sent",
                "reciever_email":email.value,
                "message_details":message.value
            }),
        
    }).then(response => response.json())
    .then(data => {
        if(data.status === 201){
            document.getElementById("errMessage").style.color="green"
            document.getElementById("errMessage").innerHTML = "Email has been sent Successfully"
        } else if(data.status === 500){
            document.getElementById("errMessage").style.color="red"
            document.getElementById("errMessage").innerHTML = `${data.error}`

        }else if(data.msg ==="Token has expired"){
            window.location.replace("login.html")
        }
    }).catch((error) => {
        document.getElementById("errMessage").style.color="red"
        document.getElementById("errMessage").innerHTML = "Please provide Correct Email or details"
    })
}
