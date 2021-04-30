const token = localStorage.getItem("token")
const group_id = document.getElementById("grp_name")
const user_id = document.getElementById("user_id")
// const url = "https://epicmail-sentongo-v2.herokuapp.com/api/v2/groups/"+group_id.value+"/name"

if(token === null){
    window.location.replace("login.html")
}

function signout(){
    localStorage.clear("token"); 
    window.location.replace("login.html")
}

function addUser(){
    fetch("https://epicmail-sentongo-v2.herokuapp.com/api/v2/groups/"+group_id.value+"/users",{
        method:"POST",
        headers:{
            "content-type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify({
            "user_id":user_id.value
        })

    })
    .then(response => response.json())
    .then(data => {

            if(data.status === 200){
            document.getElementById("errMessage").style.color="green"
            document.getElementById("errMessage").innerHTML = "Record has been deleted"
            window.location.replace("my_group.html")
        
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
