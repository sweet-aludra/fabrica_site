

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
})


function checkInputUsername(){
    const usernameValue = username.value;
    
    if(usernameValue === ""){
     errorInput(username, "Preencha o Nome de Usuario")
    }else{
        const formItem = username.parentElement;
        formItem.className = "formaconteudo"
    }
  
}

function checkInputEmail(){
    const emailValue = email.value;
    
    if(emailValue === ""){
     errorInput(email, "Email obrigatório")
    }else{
        const formItem = email.parentElement;
        formItem.className = "formaconteudo"
    }
  
}

function checkInputPassword(){
    const passwordValue = password.value;
    
    if(passwordValue === ""){
     errorInput(password, "Senha obrigatória")
    }else if(passwordValue.length < 8){
     errorInput(password, "Senha precisa ter no minimo 8 caracteres")
    } else{
        const formItem = password.parentElement;
        formItem.className = "formaconteudo"
    }
  
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;
    
    if(confirmationPasswordValue === ""){
     errorInput(passwordConfirmation, " Confirmação de senha é obrigatório")
    }else if(confirmationPasswordValue !== passwordValue){
     errorInput(passwordConfirmation, "As senhas devem ser iguais")
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "formaconteudo"
    }
  
}

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every( (item) => {
        return item.className === "formaconteudo"
    });

    if(isValid){
        alert("Cadastrado com sucesso")
    }
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "formaconteudo error"
}

