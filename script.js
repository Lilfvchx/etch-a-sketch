let size
//genero funcion para que el usuario se vea obligado a colocar numero menor a 100
const solicito = valordeseado=>{
    if(valordeseado<100){
        size=valordeseado
        return
    }
    else {
        solicito(prompt("dime valor maximo"))
    }
}
solicito(prompt("dime valor maximo"))
const divcentral = document.querySelector(".divcentral")
let divgenerado

const borrargrid=document.querySelector(".borrargrid")
//funcion para borrar grid
function borrargrids() {
    divcentral.innerHTML=""
    solicito(prompt("dime valor maximo"))
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
        let R= Math.floor(Math.random()*256)
let G= Math.floor(Math.random()*256)
let B= Math.floor(Math.random()*256)
        e.target.style.backgroundColor=`rgb(${R}, ${G}, ${B})`
      }
})
 divcentral.addEventListener("mouseout", e=>{
     
     if(e.target.matches(".active")){
         
        e.target.style.backgroundColor="black"
     }
 })
 /////
