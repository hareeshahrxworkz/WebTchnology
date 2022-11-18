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

    } else {
      alert("Please Enter valid Email and Password");
    }



  }

  function register(){
    console.log("hareesha")
    window.location.href=("./form.html")




}


let is_show=true

  let rev=document.getElementById("rev")
    function show(){
        if(is_show){

            pass.setAttribute('type','text')
        }
        else{
            
            pass.setAttribute('type','password')

        }
        is_show=!is_show
    }
