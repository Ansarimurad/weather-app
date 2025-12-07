

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '06a9384ab8msh35d5b634d067e3bp151c9ajsnd780192767ac',
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

async function getWeather() {
    try {
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

getWeather();
