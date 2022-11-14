function login() {
    var email = document.getElementById("ema").value
    var password = document.getElementById("pass").value

    var pars = JSON.parse(localStorage.getItem("javascript"));
    var obj = { email: email, Password: password };
   console.log(pars)


if(email=="" && password=="")
{
    alert("Email and Password Does Not Exists !! Please Register Here")
    return
}

    if (obj.email == pars.Email && obj.Password == pars.Password) {
      alert("login sucessful");
location.href="/MessageLogin.html"
var a=document.createElement("IMG")
a.src="./4.jpg"
document.body.appendChild(a)
    } else {
      alert("Please Enter valid Email and Password");
    }



  }

  function register(){
    console.log("hareesha")
    window.location.href=("./form.html")




}