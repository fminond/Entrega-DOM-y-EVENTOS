const boton = document.querySelector(".boton");
const gSlams = document.getElementsByClassName("GS");
const m1000 = document.getElementsByClassName("M1000");
const a500 = document.getElementsByClassName("A500");
const formulario = document.getElementsByClassName("formularios");
const nombre = document.getElementsByClassName("nombre");
const apellido = document.getElementsByClassName("apellido");
const parrafo = document.getElementsByClassName("nuevoparrafo");

boton.addEventListener("click",()=>{
   console.log("Hiciste click en el boton, creaste tu primer evento."); 
})

nombre.onkeydown= () => {console.log("keyUp");}

//¿Por que me tira error este formulario.addEventListener? Me tira que no es una funcion cuando entiendo que esta bien llamada.
// formulario.addEventListener("submit", formularioValidado)
// function formularioValidado (e){
//  e.preventDefault ();
//  console.log("El formulario fue correctamente validado");}

//------DOM-----//

for (const gSlam of gSlams) {
    console.log(gSlam.innerHTML);
}

for (const M1000 of m1000) {
    console.log(M1000.innerHTML);
}
for (const A500 of a500) {
    console.log(A500.innerHTML);
}

Arr = ["Australian Open","Roland Garros","Wimbledon","Us open"]

console.log(Arr);


for (const Arrays of Arr) {
    let torneosGs = document.createElement("li")
    torneosGs.innerHTML=Arrays
    document.body.append(torneosGs)
}

const tickets = [
    {nombre:"platea",precio:100},
    {nombre:"popular",precio:50},
    {nombre:"palco",precio:300},
    {nombre:"preferencial",precio:500}
    
]

for (const ticket of tickets) {
    let plantilla = `La ${ticket.nombre} tiene un precio de ${ticket.precio}`;
    console.log(plantilla); 
}




