console.log("%c---loaded script form.js🎉---", "background: rgb(20,80,150)");

function createElement(type, innerText){
  const newNode = document.createElement(type)
  newNode.textContent = innerText;  
  return newNode;
}

function addElementToNode(element, nodeId){
  const node = document.getElementById(nodeId);
  node.append(element);
}

const registerButton = createElement("button", "Registrarme");
const loginButton = createElement("button", "Login");

addElementToNode(registerButton, "register-form")
addElementToNode(loginButton, "login-form")


function crearFormularioDeRegistro(){
  // Creamos el <form>
  // creamos los inputs, buttons, etc
}

// "hardcodeado"
// ! Reutilizable -> Functiones y parámetro
// * Elementos Dinámicos
/* 
createButton("Registrarme", "submit", "buttons-register");
createButton("Reiniciar", "reset", "buttons-register");
createButton("Volver atrás", "button", "buttons-register");

createButton("Login", "submit", "buttons-login" )
createButton("Cancelar", "reset", "buttons-login" ) */