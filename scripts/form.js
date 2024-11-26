console.log("%c---loaded script form.js🎉---", "background: rgb(20,80,150)");

function addButtonToForm(text, typeButton, nodeId) 
{
  // obtenemos un elemento Padre del DOM
  const nodeButtons = document.getElementById(nodeId);
  console.log(nodeButtons);

  // Creamos y agregamos un botton al elemento
  const newButton = document.createElement("button"); // <button>
  newButton.textContent = text; // <button>Registrarme</button>  
  newButton.setAttribute("type", typeButton);

  // Agregar el botom al DOM / UI / interfaz de usuario
  nodeButtons.appendChild(newButton);
}




// R -> Reutilizar
addButtonToForm("Registrarse", "submit", "buttons-register")
addButtonToForm("Reiniciar", "reset", "buttons-register")
addButtonToForm("Volver atrás", "button", "buttons-register")

addButtonToForm("Ingresar", "submit", "loginForm")