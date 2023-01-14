let seleccion = prompt("Hola ! Usted desea comprar algo? Responda SI o NO")
while (seleccion.toLowerCase() !== "si" && seleccion.toLowerCase() !== "no") {
    console.log("No ha seleccionado ninguna de las opciones") 
}

if (seleccion.toLowerCase() == "si") {
    console.log("Has seleccionado la opcion correcta")   
} else if (seleccion.toLowerCase() == "no") {
    alert("Gracias por venir! Nos vemos pronto")
}


let nombre = prompt("Hola! Ingrese su nombre para comenzar.")
console.log(`El nombre ingresado de la persona es: ${nombre}`)

let sexo = prompt("Por favor, Escriba la letra segun su sexo. M en caso de ser Masculino, F en caso de ser Femenino, NB en caso de no binario")

if (sexo.toLowerCase() == 'm') {
    console.log("El sexo que has elegido es masculino")
} else if (sexo.toLowerCase() == 'f'){
    console.log("El sexo que has seleccionado es Femenino")
} else if (sexo.toLowerCase() == 'nb') {
    console.log("El sexo que has seleccionado es No binario")
} else {
    console.log("Por favor, ingrese nuevamente su sexo")
}

let zapatillas = prompt("Seleccione la marca de zapatillas que quiera comprar (NIKE-ADIDAS-PUMA-JORDAN)")
switch(zapatillas.toLowerCase()) {
    case "nike":
        console.log("Has seleccionado la marca NIKE")
    break
    case "adidas":
        console.log("Has seleccionado la marca ADIDAS")
    break
    case "puma":
        console.log("Has seleccionado la marca PUMA")
    break
    case "reebok":
        console.log("Has seleccionado la marca REEBOK")
    break
    default:
        console.log("Por favor, vuelva a escribir la marca")
    break
}

function tallesDisponibles(){
    for (let i = 40; i <= 44; i++) {
        console.log(`Los talles disponibles son: ${i}`)
    }
}


function llevarZapas(){
    let cantidad = parseInt(prompt("Ingrese la cantidad de zapatillas que desea llevar"))
    for (let i = 0; i <= cantidad; i++) {
        console.log(`La cantidad de zapatillas que va a llevar son ${cantidad}`)
    }
}

tallesDisponibles()
llevarZapas()
