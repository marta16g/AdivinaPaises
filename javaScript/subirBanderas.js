document.addEventListener('DOMContentLoaded', () => traerJsonBanderas())

const existeKey = (clave) =>
{
    return localStorage.getItem(clave) !== null
}

const traerJsonBanderas = async () =>
{
    if(!existeKey('Paises'))
    {
        try {
        const response = await fetch('../json/banderas.json')
        const banderas = await response.json()
        
        localStorage.setItem("Paises", JSON.stringify(banderas))

    } catch (error) {
        console.log(error, "<--- error al traer json")
    } 
    }
    
} 

