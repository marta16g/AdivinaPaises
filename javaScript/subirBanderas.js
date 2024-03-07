const traerJsonBanderas = async () =>
{
    try {
        const response = await fetch('../json/banderas.json')
        const banderas = await response.json()
        
        localStorage.setItem("Países", JSON.stringify(banderas))

    } catch (error) {
        console.log(error, "<--- error al traer json")
    } 
} 

