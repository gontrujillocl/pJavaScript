let form = document.getElementById("formulario");
form.addEventListener("submit", function(event){
    event.preventDefault();
    cleanErrors();
    let nameImput = document.querySelector("#nombre").value; 
    let subjectImput = document.querySelector("#asunto").value;
    let messageTextArea = document.querySelector("#mensaje").value;

    let result = validate(nameImput, subjectImput, messageTextArea);

    if (result == true) {
        document.getElementsByClassName("resultado").innerHTML = "Mensaje enviado con exito";
    };
});

function cleanErrors() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
};

function validate(name, subject, message) {
    let validateInputs = true;
    let validateNameInput = /[a-zA-Z]/gim;
    let validateSubjectInput = /[a-zA-Z]/gim;
    let validateMessageTextarea = /[a-zA-Z]/gim;

    if (validateNameInput.test(name) == false) {
        document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido"
        validateInputs = false;
    };
    if (validateSubjectInput.test(subject) == false) {
        document.querySelector(".errorAsunto").innerHTML = "Ingrese un asunto válido"
        validateInputs = false;
    }
    if (validateMessageTextarea.test(message) == false) {
        document.querySelector(".errorMensaje").innerHTML = "Ingrese un mensaje válido"
        validateInputs = false;
    }
    else {
        document.querySelector(".resultado").innerHTML = "Mensaje enviado con exito";
    }
};