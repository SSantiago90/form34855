console.log("%c---loaded script form.js🎉---", "background: rgb(20,80,150)");


function createButton(text, typeButton) {
  const newButton = document.createElement("button");
  newButton.textContent = text;
  newButton.setAttribute("type", typeButton);
  return newButton
}

function addElementToNode(element, nodeid) { 
  const node = document.getElementById(nodeid);
  node.appendChild(element);
  return node
}



addElementToNode(
  createButton("Registrar", "submit"), // <button type="submit">Registrar</button>
  "buttons-register"
);

addElementToNode(
  createButton("Cancelar", "reset"), // <button type="reset">Cancelar</button>
  "buttons-register"
)