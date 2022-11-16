function validate()
{

    var userName=document.getElementById("user").value
    console.log(userName)
    document.getElementById("username").innerHTML=userName
    if(userName=="")
    {
        document.getElementById("usermsg").innerHTML="Please Enter Your Username"
       document.getElementById("usermsg").style.color="red"
       
    }

    var Email=document.getElementById("Email").value
    console.log(Email)
    document.getElementById("Email").innerHTML=Email

    if(Email=="")
    {
        document.getElementById("emailmsg").innerHTML="Please Enter Your Email"
       document.getElementById("emailmsg").style.color="red"
    }

    var Password=document.getElementById("password").value
    console.log(Password)
    document.getElementById("Password").innerHTML=Password

    if(Password=="")
    {
        document.getElementById("passwordmsg").innerHTML="Please Enter Your Password"
       document.getElementById("passwordmsg").style.color="red"
    }

var gender=Registrationform.gen



if(gender[0].checked==false && gender[1].checked==false && gender[2].checked==false)
{

    document.getElementById("er").innerHTML="please Select Gender"
    document.getElementById("er").style.color="red"

}


var gen=gender[0].checked
 console.log(gen)

if(gender[0].checked==true)

    {
document.getElementById("m").innerHTML="You ar selected gender is Male"


}
if(gender[1].checked==true)
{
    
    document.getElementById("m").innerHTML="You ar selected gender is Female"

}
if(gender[2].checked==true)
{
    document.getElementById("m").innerHTML="You ar selected gender is Others"
}

var city=document.Registrationform.city.value

if(city==0){

    document.getElementById("city").innerHTML="Pleace Select city"
    document.getElementById("city").style.color="red"


}
document.getElementById("citys").innerHTML=city

var object={ "userName":userName,"Email":Email,"City":city,"Password":Password}

var valid=JSON.parse(localStorage.getItem("javascript"))
console.log(valid)
if(valid!=null)
{
if(object.Email==valid.Email){

alert("email is alredy exist Please Try TO another Email id")

return;

}
}


if(Email!=""&&Password!="")
{
    
localStorage.setItem("javascript",JSON.stringify(object))

}




if(Password!=""){
alert("Registration sucessful please login here")
}

}

function Login (){
    window.location.href=("./formlogin.html");

}