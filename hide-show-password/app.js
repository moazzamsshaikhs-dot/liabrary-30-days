let eyeicon = document.querySelector("#eyeicon");
let password = document.querySelector("#password");

eyeicon.onclick = function (){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.classList.remove("fa-eye-slash");
        eyeicon.classList.add("fa-eye");
    }
    else{
        password.type = "password";
        eyeicon.classList.add("fa-eye-slash");
        eyeicon.classList.remove("fa-eye");
    }
}