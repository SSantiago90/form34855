console.log("%cloaded script form.js👌", "background: purple");

let formu = document.querySelector('#loginForm');

formu.addEventListener('submit', (event)=> {
  event.preventDefault();
  console.log(event.target);
  let inputs = event.target.elements;
  inputs.length = 4;
  console.log(inputs)
})