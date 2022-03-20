let size = Number(prompt("tamaño")) //pregunto mediante prompt al user el tamaño de cuadricula
const divcentral = document.querySelector(".divcentral")
let divgenerado
const borrargrid=document.querySelector(".borrargrid")
//funcion para borrar grid
function borrargrids() {
    const botongenerado=
}
//genero loop para que se creen los elementos y añadirlos al div central
for (let index = 0; index < size * size; index++) {
  divgenerado = document.createElement("div");
  divgenerado.classList.add("grid");
  divcentral.appendChild(divgenerado);
}
//cambio gridtemplate columns and rows para que sea por el size ingresado por el user
divcentral.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
divcentral.style.gridTemplateRows = `repeat(${size}, 1fr)`;
//cambiar clase de los divs que el mouse le pase encima para cambiar el color
 divcentral.addEventListener("mouseover", e=>{
    if (e.target.matches(".grid")) {
        e.target.classList.add('active');
      }
})
 divcentral.addEventListener("mouseout", e=>{
     if(e.target.matches(".active")){
        e.target.classList.remove("active")
     }
 })
 /////
