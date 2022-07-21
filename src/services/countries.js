const API_URL ="https://restcountries.com/v3.1";

export async function getAllCountries(){
    try {
        const response = await fetch(`${API_URL}/all`)
        const data = await response.json()
        return data;

    } catch (error) {
        console.error(error)
    }
    
}

export async function getCountryDetails(country){
    try {
        const response = await fetch(`${API_URL}/name/${country}`)
        const data = await response.json()
        return data;
        
    } catch (error) {
        console.error(error)
    }
}