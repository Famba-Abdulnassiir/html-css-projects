const username = document.getElementById("email")
const password = document.getElementById("password")

function userLogin(){
    fetch("https://epicmail-sentongo-v2.herokuapp.com/api/v2/auth/signin",{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify({
            "email_address":username.value,
            "password":password.value
        })
    })
    .then((response) => response.json())
    .then((data) => {
        if(data.status === 200){
            const token = data.data[0].token
            localStorage.setItem("token", token);           
            window.location.replace("home.html")            
        } else{
            document.getElementById("msg").style.color="#ff0008";
            document.getElementById("msg").innerHTML =`${data.error}`
        }
        
        
    })

    
}
