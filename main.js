const signup = document.querySelector(".signup-container");
const success = document.querySelector('.success');
const subscribe = document.querySelector("#subscribe");
const dismiss = document.querySelector('#dismiss');



let error = document.querySelector(".error");


let input_error = "";
let email = document.querySelector("#email-input");


subscribe.addEventListener('click', (event)=>{

    if(email.value.trim().length === 0){
        input_error = "valid email required";
        error.textContent = input_error;
        email.classList.add('input-error');
    }else{
        if(emailValidation(email.value)){
            input_error = " ";
            email.value = " ";
            signup.style.display = "none";
            success.style.display = "flex";
        }else{
            input_error = "valid email required";
            error.textContent = input_error;
            email.classList.add('input-error');
        }
        
    }
    event.preventDefault();
});

function emailValidation(email_arg) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email_arg);
}

//ading an click eventlistner to dismiss button 

dismiss.addEventListener('click', ()=>{
    email.classList.remove('input-error');
    success.style.display = "none";
    signup.style.display = "flex";
    error.textContent = " ";
    email.value = " ";
});
