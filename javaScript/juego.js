const artBanderas = document.getElementById('artBanderas')

const traerLocalstorageBanderas = () => {
    const banderas = JSON.parse(localStorage.getItem("Paises"))

    console.log(banderas, "banderas desde localstorage")

    return banderas

}


const banderas = traerLocalstorageBanderas()

let arrAmerica = banderas.America
let arrAsia = banderas.Asia

let arrBanderas = arrAmerica.concat(arrAsia)


const desordenarArreglo = (arreglo, max, indice) =>
{
  
    const indexAleatorio = Math.floor(Math.random() * max)

    let elementoAleatorio = arreglo[indexAleatorio]
    
    arreglo[indexAleatorio] = arreglo[indice]
    arreglo[indice] = elementoAleatorio
        

}



const recorrerArreglo = (arreglo) => {
    console.log("Estoy funcionando  recorrido")

    const max = arreglo.length
    let j = 0

    for (let i = 0; i < max; i++) {
        desordenarArreglo(arreglo, max, i)
    }
    
    
}

recorrerArreglo(arrBanderas)

