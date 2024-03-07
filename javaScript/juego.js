const artBanderas = document.getElementById('artBanderas')

const traerLocalstorageBanderas = () => {
    const banderas = JSON.parse(localStorage.getItem("Países"))

    console.log(banderas, "banderas desde localstorage")

    return banderas

}

const banderas = traerLocalstorageBanderas()
banderas = [...banderas.America, ...banderas.Asia]
console.log(banderas)
// const paises = banderas.America

// const maquetadoDeCards = (bandera) => 
// {
//     let card = document.createElement('div')
//     let img = document.createElement('img')
//     let input = document.createElement('input')
//     let nombre = document.createElement('p')
    
//     img.src = banderas.America[i].flag
//     input.type = "text"

//     card.appendChild(img)
//     card.appendChild(input)
//     artBanderas.appendChild(card)
// }

// const recorridoParaMaquetado = () => {
//     console.log("Estoy funcionando")
//     for (let i = 0; i < banderas.America.length; i++) {
        
//     }

// }

// recorridoParaMaquetado()