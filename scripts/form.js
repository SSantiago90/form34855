console.log("%cloaded script form.js👌", "background: blue");

//1. Agregar un Event Listener al formulario "#loginForm" del index.html
let formulario = document.getElementById("loginForm");
console.log(formulario);

formulario.addEventListener("submit", (event) => {
  //2. Obtener el evento de "submit" en una función (Event handler) y evitar que la página se "refresque"
  event.preventDefault();

  //3. Obtener los valores (values) de los inputs Usuario y Contraseña
  let email = event.target.elements[1].value;
  let password = event.target.elements[3].value;
  //4. Si el usuario es igual a "coderhouse" y la contraseña es igual a 1234,
  //  darle visibilidad a la <section> oculta del index.html
  console.log(email, password);
  if (email === "a@a.com" && password == "123") {
    console.log("ok");
    let section2 = document.getElementById("section_b");
    section2.style.display = "block";
  }
});

let formularioArray = document.getElementById("submitForm");

// 5. Similar a la consigna anterior, obtener el "value" del input del formulario
formularioArray.addEventListener("submit", (event) => {
  event.preventDefault();
  // 6. Guardar ese valor en una variable y convertirlo en un array (tip: array.split())
  let stringInput = event.target.querySelector("input");
  let arrayFromString = stringInput.value.split(" ");
  console.log(arrayFromString);
});
