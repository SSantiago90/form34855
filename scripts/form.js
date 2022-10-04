console.log("%cloaded script form.js👌", "background: purple");

const miFormulario = document.querySelector("#loginForm");

miFormulario.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(evt.target);
  let usuario = "salkinsantiago@gmail.com";
  let password = "1234";

  let inputUsuario = evt.target.elements[0].value;
  let inputPassword = evt.target.elements[1].value;
  console.log(inputUsuario, inputPassword);

  if (inputUsuario === usuario && inputPassword === password) {
    alert("Te logeaste correctamente!");
  }
});

function handleSubmitForm(event) {
  // Javascript automáticamente recibe el parametro del evento
  // el "target" de el evento que se desencadenó, es el elemento html <form> que clickeamos
  console.log(event.target);

  // los forms guardan como un array sus inputs internos
  // event.target[0] -> input nombre... event.target[1] -> input contraseña...  etc

  event.preventDefault();

  const palabras = event.target[0].value;
  //dividimos nuestro String en un array, separando por espacios
  const arrayDePalabras = palabras.split(" ");
  console.log("Array:", arrayDePalabras);
}
