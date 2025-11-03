let name_error = document.querySelector("#name-error");
let phone_error = document.querySelector("#phone-error");
let email_error = document.querySelector("#email-error");
let message_error = document.querySelector("#message-error");
let submit_error = document.querySelector("#submit-error");


function validatename(){
    let name = document.querySelector("#contact-name").value;

    if(name.length == 0){
        name_error.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        name_error.innerHTML = 'Write full name';
        return false;
    }
    name_error.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}

function  validatephone(){
     let phone = document.querySelector("#contact-phone").value;

     if(phone.length == 0){
        phone_error.innerHTML = "Phone No is required";
        return false;
     }
     if(phone.length !== 10){
        phone_error.innerHTML = "Phone No should be 10 digits";
        return false;
     }
     if(!phone.match(/^[0-9]{10}$/)){
        phone_error.innerHTML = "Only digits please."
        return false;
     }

     phone_error.innerHTML = "<i class='fas fa-check-circle'></i>";
     return true;
}

function validateemail(){
     let email = document.querySelector("#contact-email").value;

     if(email.length == 0){
        email_error.innerHTML = "Email is required";
        return false;
     }
     if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        email_error.innerHTML = "Email Invalid"
        return false;
     }
     email_error.innerHTML = "<i class='fas fa-check-circle'></i>";
     return true;
}


function validatemessage(){
        let message = document.querySelector("#contact-message").value;
        let required = 30;
        let left = required - message.length;

        if(left > 0){
         message_error.innerHTML = left + 'more characters required';
         return false;
        }

        message_error.innerHTML = "<i class='fas fa-check-circle'></i>";
        return true;

}


function validateform(){
   if(!validatename() || !validatephone() || !validateemail() || !validatemessage()){
      submit_error.style.display = "block";
      submit_error.innerHTML = 'please fix error to submit';
      setTimeout(function(){submit_error.style.display = "none";},3000);
      return false;
   }
}





// plt.savefig("form_validation_flowchart.png", bbox_inches="tight")
// plt.savefig("form_validation_flowchart.pdf", bbox_inches="tight")
