console.log("%c---loaded script form.js🎉---", "background: rgb(20,80,150)");

function createButton(text, typeButton, parentNodeId){
  // obtenemos un elemento del DOM
  const registerFormButtons = document.getElementById(parentNodeId) 
  //console.log(registerForm);
  
  // Crear nuevos nodos dentro de ese elemento
  const boton = document.createElement('button') // <button></button>
  boton.textContent = text;
  boton.setAttribute("type", typeButton);
  registerFormButtons.append(boton)
}

// "hardcodeado"
// ! Reutilizable -> Functiones y parámetro
// * Elementos Dinámicos

createButton("Registrarme", "submit", "buttons-register");
createButton("Reiniciar", "reset", "buttons-register");
createButton("Volver atrás", "button", "buttons-register");

createButton("Login", "submit", "buttons-login" )
createButton("Cancelar", "reset", "buttons-login" )