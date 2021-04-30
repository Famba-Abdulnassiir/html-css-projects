const username = document.getElementById="email"
const password = document.getElementById="password"

const url = "https://epicmail-sentongo-v2.herokuapp.com/api/v2/auth/signin,"

// async function userLogin(){
//         const response = await fetch (url,{
//             method:"POST",
//             headers:{"content-type":"application/json"},
//             body:JSON.stringify({"email_address":username.value, "password":password.value})
//         })

//         const result = await response.json();
   
//         console.log(result);
//         //return result;

// }
async function userLogin() {
    const response = await fetch (url,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({"email_address":username.value, "password":password.value})
    })
  
    if (!response.ok){
      const message = `document.getElementById="msg".innerHTML = ${response.status}`;
      throw new Error(message);
      
    }
  
    const result = await response.json();
    return result;
  }
  
  userLogin().catch(error => {
    error.message; // 'An error has occurred: 404'
  });
// function signin(){
// const email_address = document.getElementById("email");
// const  password = document.getElementById("password");


// const url ="https://epicmail-sentongo-v2.herokuapp.com/api/v2/auth/signin";
   

//     const signin_user = {
//         "email_address": email_address.value,
//         "password": password.value,
// };

// fetch(url, {
//     method: "POST",
//     headers:{
//         "Content-Type":"application/json",
//     },
    
//     body: JSON.stringify(signin_user),
//         "email_address": email_address.value,
//         "password": password.value,
        
    
// })
//     .then((response) => response.json())
//     .then((data) => {
//             if (data.status !== 200) {
//             document.getElementById("msg").style.display ="block";
//             document.getElementById("msg").style.color ="red";
//             document.getElementById("msg").innerHTML = data.error;
            
//         }
//         else if (data.status === 200){
//             document.getElementById("msg").style.display = "block";
//             document.getElementById("msg").style.color = "green"
//             document.getElementById("msg").innerHTML = "signed in Successfuly"
//             token = data.data[0].token;
//             localStorage.setItem("token", token);
//             window.location.replace("home.html");
        

//         }
    
// }).catch(error => { console.log("error",error)});
// }
