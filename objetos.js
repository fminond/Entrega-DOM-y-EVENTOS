// function Persona(nombre,apellido,edad) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.mostrar = function () {console.log("La edad de "+ this.nombre +" es: " + this.edad);}
// }

// const persona1 = new Persona("Feche","Minond Duhalde","23");
// const persona2 = new Persona("Facu","Gillert","24");
// const persona3 = new Persona("Alejandra","Duhalde","64");
// const persona4 = new Persona("Ruben","Minond","59");


// // persona1.mostrar();

// for (const Persona in persona4) {
    
//     console.log(persona4[Persona]);
        
//     }   

// class Persona{
//     constructor (nombre,apellido,edad){
//         this.nombre=nombre;
//         this.apellido=apellido;
//         this.edad=edad;
//     }
//     mostrar(){
//         console.log("Hola, me llamo " + this.nombre + " y tengo "+ this.edad +" años");
//     }

// }

// const persona1 = new Persona("Maria Alejandra","Duhalde",64);
// const persona2 = new Persona("Facu","Gillert","24");
// const persona3 = new Persona("Alejandra","Duhalde","64");
// const persona4 = new Persona("Ruben","Minond","59");


// persona1.mostrar();

// class GrandSlam {

//     constructor(nombre, pais, ciudad){

//         this.nombre=nombre;
//         this.pais=pais;
//         this.ciudad=ciudad;
//     }

//     mostrar(){
//         console.log("Te voy a dar información sobre el torneo " + this.nombre + " .Se juega en: " + this.pais + " en la ciudad de " + this.ciudad);
//     }

// }

// const gs1 = new GrandSlam("Australian Open", "Australia","Melbourne");
// const gs2 = new GrandSlam("Roland Garros", "Francia","Paris");
// const gs3 = new GrandSlam("Wimbledon", "Inglaterra","Londres");
// const gs4 = new GrandSlam("Us Open", "Estados Unidos","Nueva York");

// gs1.mostrar();
// gs2.mostrar();
// gs3.mostrar();
// gs4.mostrar();

// const sumar = (n1,n2) => {
//     return (n1 + n2);
// }
// console.log(sumar(55,6));


// const personaje1 = {
//     nombre: "Homero",
//     apellido: "Simpson",
//     calle: "Av Siempreviva 742",
//     edad: 38,
//   };
  
//   const personaje2 = {
//     nombre: "Marge",
//     apellido: "Simpson",
//     calle: "Av Siempreviva 742",
//     edad: 39,
//     hijos: {
//       primero: "Bart",
//       segundo: "Lisa",
//       tercero: "Maggie",
//       cuarto: "Hugo",
//     },
//   };

//   const mostrar = () => {
//     console.log(personaje1,personaje2);
//   }

//   mostrar(personaje1["nombre"]);


// const miarray = [1,2,3,4,5,6,7,8,9,10];

// for (let index = 0; index < miarray.length; index++) {
//     console.log(miarray[index]);
//     if (index===5) {
//         continue;
//     }
// }

// const listaNombres = [];

// let cantidad = 5;

// do {

//     let nombre = prompt("Ingresa tu nombre");

//     listaNombres.push(nombre.toUpperCase());

//    console.log(listaNombres.length);
    
// } while (listaNombres.length != cantidad);

// console.log(listaNombres.join("\n")); 


// class Ropa {
//     constructor(articulo,talle,precio){

//         this.articulo=articulo;
//         this.talle=talle;
//         this.precio=parseInt(precio);
//         this.vendido=true;
//     }
    
//     sumaIva(){
//         this.precio = console.log(this.precio*1.21); 
//     }
//     Vender() {
//        this.vendido = console.log("Vendiste el auto");
//     }
// }

// const ropa1 = new Ropa("remera","m",4500);

// ropa1.sumaIva();
// ropa1.Vender();



