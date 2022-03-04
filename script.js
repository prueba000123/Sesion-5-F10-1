// const btn = document.getElementsById('boton');

// btn.addEventListener("click", function(){
//     alert('Se hizo en el boton')
// })

// input.addEventListener("focus", function(){
//     console.log("Se le hizo focus al input")
// })

// input.addEventListener("blur", function(){
//     console.log("Evento Blur")
// })

// window.addEventListener('load', mostrar())

// function mostrar (){
//     console.log("Se cargo la pagina")
// }

// document.addEventListener('DOMContentLoaded', function(){
//     console.log("Se cargo el DOM")
// })

// const form = document.getElementById("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault()
//     console.log("se envio el formulario")
// })

// const input = document.querySelector("#input");
// input.addEventListener("change", function(){
//     console.log("Esta escribiendo")
// })

let ventilador = {
    altura: "100cm",
    color: "Negro",
    potencia: "100W",
    helices: {
        tamaño: "10cm",
        material: "Plastico",
        color: "Blanco",
        precio: {
            precio1: 20,
            precio2: 40,
            casa: {
                casa1: "La mia",
                casa2: "La tuya"
            }
        }
    }
}

const { tamaño, material, color, precio } = ventilador.helices

console.log(tamaño, material, color, precio)

// console.log(ventilador.helices.precio.casa.casa1);

// function Perro(name, age, life){
//     this.nombre = name;
//     this.edad = age;
//     this.vivo = life;
// }

// let perroUno = new Perro('rex', '5 meses', true)

// let { nombre, edad, vivo } = perroUno;