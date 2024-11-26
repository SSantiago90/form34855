console.log("%cloaded script form.js", "background: purple");

function addElementInNode(nodeId, element ){
  const nodeDOM = document.getElementById(nodeId)
  nodeDOM.appendChild(element)
  return nodeDOM;
}

function createElement(type, content){
  const newElement = document.createElement(type);
  newElement.textContent = content;
  return newElement;
}

function addButtonToForm(text) {
  const btnElementSubmit = createElement("button", text);
  addElementInNode("registerFormInputs", btnElementSubmit)  
}

function addInputToForm(label, type){
  const inputElement = createElement("input", label);
  inputElement.setAttribute("type", type);
  const labelElement = createElement("label", label);
  addElementInNode("registerFormInputs", labelElement)
  addElementInNode("registerFormInputs", inputElement)

  //  Bad
  //const inputElementBAD =  `<div><label for="email">Email</label><input type="email" id="email" name="email" placeholder="email" /></div>` 
  //newInputNode.innerHTML = inputElement
}

// ! Reutilizar -> argumentos/parámetros
// Creamos abstracciones
// Creamos componentes reutilizables con parámetros
// Código imperativo -> Código declarativo

addInputToForm("Nueva Contraseña", "password");
addInputToForm("Nombre de Usuario", "text");
addInputToForm("Edad", "number");
addInputToForm("Otro campo", "range" );

addButtonToForm("Registrarse");
addButtonToForm("Cancelar");


