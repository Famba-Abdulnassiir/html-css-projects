const token = localStorage.getItem("token")
const groupname = document.getElementById("grp_name")

if(token === null){
    window.location.replace("login.html")
}

function signout(){
    localStorage.clear("token"); 
    window.location.replace("login.html")
}

function createGroup(){
    fetch("https://epicmail-sentongo-v2.herokuapp.com/api/v2/groups",{
        method:"POST",
        headers:{
            "content-type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify({
            "group_name":groupname.value
        })

    })
    .then(response => response.json())
    .then(data => {

        console.log("data", data)
        if(data.status === 201){
            document.getElementById("errMessage").style.color="green"
            document.getElementById("errMessage").innerHTML = "Successfully created... Thank you"
            window.location.replace("home.html")
        
        } else 
        if(data.status === 400){
            document.getElementById("errMessage").style.color="red"
            document.getElementById("errMessage").innerHTML = `${data.error}`
        }

        else if(data.msg ==="Token has expired"){
            window.location.replace("login.html")
        }
    })
}
