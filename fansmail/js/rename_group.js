const token = localStorage.getItem("token")
const group_id = document.getElementById("grp_name")
const user_id = document.getElementById("user_id")


if(token === null){
    window.location.replace("login.html")
}

function signout(){
    localStorage.clear("token"); 
    window.location.replace("login.html")
}

function renameGroup(){
    fetch("https://epicmail-sentongo-v2.herokuapp.com/api/v2/groups/"+user_id.value+"/name",{
        method:"PATCH",
        headers:{
            "content-type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify({
            "new_name":group_id.value
        })

    })
    .then(response => response.json())
    .then(data => {

            if(data.status === 200){
            document.getElementById("errMessage").style.color="green"
            document.getElementById("errMessage").innerHTML = "Record has been renamed"
            window.location.replace("home.html")
        
        } else 
        if(data.status === 401){
            document.getElementById("errMessage").style.color="red"
            document.getElementById("errMessage").innerHTML = `${data.error}`
        }

        else if(data.msg ==="Token has expired"){
            window.location.replace("login.html")
        }
    })
}
