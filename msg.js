
var pars = JSON.parse(localStorage.getItem("javascript"));



document.getElementById("user").innerHTML=pars.Email
document.getElementById("user").style.color="blue"

document.getElementById("pass").innerHTML=pars.Password
document.getElementById("pass").style.color="red"
