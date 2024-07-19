/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


const btnSignIn = document.getElementById("sign-in"),
      btnSignUp = document.getElementById("sign-up"),
      containerFormRegister = document.querySelector(".register"),
      containerFormLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e => {
    containerFormRegister.classList.add("hide");
    containerFormLogin.classList.remove("hide");
});


btnSignUp.addEventListener("click", e => {
    containerFormLogin.classList.add("hide");
    containerFormRegister.classList.remove("hide");
});



const nombre = document.getElementById("Name");
const correoInput = document.querySelector("#Email");
const contraseña = document.querySelector("#Password");
const btn_register = document.querySelector("#Registrarse");

const cantidad = (elemento) => {
    // Asignar un ID unico al span de error basado en el nombre del elemento
    const spanId = `spanError${elemento.id}`;
    const errorMessage = "Debe contener entre 3 a 40 caracteres";

    // Buscar si ya existe un span de error específico para este elemento
    let span = document.querySelector(`#${spanId}`);
    if (!span) {
        span = document.createElement("span");
        span.setAttribute("id", spanId);
        span.setAttribute("class", "ErrorSpan");
        span.textContent = errorMessage;
    }

    const padre = elemento.parentElement;

    if (elemento.value.length <= 40 && elemento.value.length >= 3) {
        elemento.classList.remove("incorrecto");
        elemento.classList.add("correcto");
        if (span.parentNode === padre) {
            padre.removeChild(span);
        }
    } else {
        elemento.classList.remove("correcto");
        elemento.classList.add("incorrecto");
        if (span.parentNode !== padre) {
            padre.appendChild(span);
        }
    }
};

// Función para validar el correo electrónico
const validarCorreo = (elemento) => {
    
    const spanId = `spanError${elemento.id}`;
    const errorMessage = "Correo inválido.";

    // Expresion regular 
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  
    let span = document.querySelector(`#${spanId}`);
    if (!span) {
        span = document.createElement("span");
        span.setAttribute("id", spanId);
        span.setAttribute("class", "ErrorSpan");
        span.textContent = errorMessage;
    }

    const padre = elemento.parentElement;

    // Validar el correo electrónico
    if (regexCorreo.test(elemento.value)) {
        elemento.classList.remove("incorrecto");
        elemento.classList.add("correcto");
        if (span.parentNode === padre) {
            padre.removeChild(span);
        }
    } else {
        elemento.classList.remove("correcto");
        elemento.classList.add("incorrecto");
        if (span.parentNode !== padre) {
            padre.appendChild(span);
        }
    }
};

// Función para validar contraseñas
const validarContrasena = (elemento) => {
    const spanId = `spanError${elemento.id}`;
    const errorMessage = "Contraseña inválida.";

    const regexContrasena = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    let span = document.querySelector(`#${spanId}`);
    if (!span) {
        span = document.createElement("span");
        span.setAttribute("id", spanId);
        span.setAttribute("class", "ErrorSpan");
        span.textContent = errorMessage;
    }

    const padre = elemento.parentElement;

    // Validar la contraseña
    if (regexContrasena.test(elemento.value)) {
        elemento.classList.remove("incorrecto");
        elemento.classList.add("correcto");
        if (span.parentNode === padre) {
            padre.removeChild(span);
        }
    } else {
        elemento.classList.remove("correcto");
        elemento.classList.add("incorrecto");
        if (span.parentNode !== padre) {
            padre.appendChild(span);
        }
    }
};

//funcion Validar que no se suba ningun campo vacio
const validarCampos = (elemento) => {
    const spanId = `spanError${elemento.id}`;
    const errorMessage = "Este campo no puede estar vacio.";
    let span = document.querySelector(`#${spanId}`);
        if (!span) {
            span = document.createElement("span");
            span.setAttribute("id", spanId);
            span.setAttribute("class", "ErrorSpan");
            span.textContent = errorMessage;
            }
            const padre = elemento.parentElement;
            if (elemento.value === "") {
                elemento.classList.remove("correcto");
                elemento.classList.add("incorrecto");
                if (span.parentNode !== padre) {
                    padre.appendChild(span);
                    btn_register.disabled = true;
                }
                    } else{
                        elemento.classList.remove("incorrecto");
                        elemento.classList.add("correcto");
                        
                        if (span.parentNode === padre) {
                            padre.removeChild(span);
                            btn_register.disabled = false;
                            }
                    }
            };



const SoloLetras = function(event) {
    const regexLetras = /^[a-zA-Z\ ]{0,}$/;
        
    if (!(regexLetras.test(event.key))) {
        event.preventDefault();
    }
};

nombre.addEventListener("keypress",(event)=> SoloLetras(event));
nombre.addEventListener("input",(event)=> cantidad(nombre));
correoInput.addEventListener("input", () => validarCorreo(correoInput));
contraseña.addEventListener("input", () =>validarContrasena(contraseña));



nombre.addEventListener("blur",(event)=>validarCampos(nombre));
correoInput.addEventListener("blur",(event)=>validarCampos(correoInput));
contraseña.addEventListener("blur",(event)=>validarCampos(contraseña));