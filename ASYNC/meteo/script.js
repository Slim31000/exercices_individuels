

const key = '62a6d5e57254420ea2137ccca64f9690'
const keyTemperature = '740b5e4edbeb02f7f3aa89358da31488'

const validation = document.getElementById('valider')
async function getPosition() {
    const villeInput = document.getElementById('ville')
    const paysInput = document.getElementById('pays')
    const ville=villeInput.value.toLowerCase()
    const pays= paysInput.value.toLowerCase()
    const resp = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${ville}%2C%20${pays}&format=json&apiKey=${key}`)
    const data = await resp.json()
    villeInput.value=''
    paysInput.value=''
    const latitude = data.results[0].lat
    const longitude = data.results[0].lon
    return { latitude, longitude }
}
function emojiPrecipitation(mm) {
    switch (true) {
        case (mm === 0):
            return "☀️";
        case (mm <= 2):
            return "🌦️";
        case (mm <= 10):
            return "🌧️";
        case (mm <= 30):
            return "⛈️";
        default:
            return "🌩️💦";
    }
}


async function getWeather(latitude, longitude) {
    const url = `https://api.weatherstack.com/current?access_key=${keyTemperature}&query=${latitude},${longitude}`
    const options = {
        method: "GET",
    };

    try {
        const card = document.getElementById('body')
        const affichageTemperature = document.getElementById('affichage')
        affichageTemperature.textContent = ""
        card.querySelectorAll('p').forEach(p => p.remove());
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        console.log(result.current.temperature)
        affichageTemperature.textContent = `Température actuelle a ${result.location.name} : ${result.current.temperature}°C`;
        const pPrecip = document.createElement('p')
        pPrecip.textContent = `Précipitations : ${result.current.precip} mm ${emojiPrecipitation(result.current.precip)}`;
        card.appendChild(pPrecip)
    } catch (error) {
        console.log(error);
    }




}

validation.addEventListener('click', async () => {
    const position = await getPosition();
    if (position) {
        await getWeather(position.latitude, position.longitude);
    }


})