const email = document.getElementById("email")
const password = document.getElementById("password")

function reset_password(){

    fetch ("https://epicmail-sentongo-v2.herokuapp.com/api/v2/auth/reset",{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify({
            "email_address":email.value,
            "password":password.value,
        })
        
    })
    .then(response => response.json())
    .then(data => {
        console.log("data", data)
        if(data.status === 200){
            document.getElementById("errMessage").style.color="green"
            document.getElementById("errMessage").innerHTML = `${data.error}`
        } else
        if(data.status ===  400){
            document.getElementById("errMessage").style.color="red"
            document.getElementById("errMessage").innerHTML = `${data.error}`
        } else
        if(data.status ===  404){
            document.getElementById("errMessage").style.color="red"
            document.getElementById("errMessage").innerHTML = `${data.error}`
        }
    })
}
