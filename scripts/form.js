console.log("%cloaded script form.js👌", "background: blue");

//1. Agregar un Event Listener al formulario "#loginForm" del index.html
let formulario = document.getElementById("loginForm");
console.log(formulario);

formulario.addEventListener("submit", (event) => {
  //2. Obtener el evento de "submit" en una función (Event handler) y evitar que la página se "refresque"
  event.preventDefault();

  let email = console.log(event.target.elements[0].value);
  let password = console.log(event.target.elements[1].value);
});

//3. Obtener los valores (values) de los inputs Usuario y Contraseña
//4. Si el usuario es igual a "coderhouse" y la contraseña es igual a 1234,
//  darle visibilidad a la <section> oculta del index.html

// 5. Similar a la consigna anterior, obtener el "value" del input del formulario
// 6. Guardar ese valor en una variable y convertirlo en un array (tip: array.split())
