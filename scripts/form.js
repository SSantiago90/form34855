console.log("%cloaded script form.js👌", "background: purple");

//1. Agregar un Event Listener al formulario "#loginForm" del index.html
let formulario = document.querySelector("#loginForm");

formulario.addEventListener("submit", (event) => {
  //2. Obtener el evento en una función (Event handler) y evitar que la página se "refresque"
  event.preventDefault();

  //3. Obtener los valores (values) de los inputs Usuario y Contraseña
  console.log(event.target);
  let usuario = event.target.elements[0];
  console.log(usuario.value);
});

//4. Si el usuario es igual a "coder@house.com" y la contraseña es igual a "1234",
//  darle visibilidad a la <section> oculta del index.html

// 5. Similar a la consigna anterior, obtener el "value" del input del formulario
// 6. Guardar ese valor en una variable y convertirlo en un array (tip: array.split())
