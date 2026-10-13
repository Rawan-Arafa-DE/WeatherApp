
// url = https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London


// Replace this placeholder with your WeatherAPI key
const apiKey = 'YOUR API KEY';
const apiUrl = 'https://api.weatherapi.com/v1/current.json?key=';
const inputCity = document.querySelector('.js-input')
const searchBtn = document.querySelector('.js-search-button')

inputCity.addEventListener('keydown',(event)=>{
    if (event.key === 'Enter')
    {
        checkWeather(inputCity.value);
    }
})


searchBtn.addEventListener('click',()=>{
    checkWeather(inputCity.value);
});


async function checkWeather(cityName) {

    const response = await fetch(apiUrl + apiKey + `&q=${cityName}`);

    if (!response.ok){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
        
    }
    else{

    let data = await response.json();


    document.querySelector('.city').innerHTML = data.location.name;

    document.querySelector('.temp').innerHTML = `${Math.round(data.current.temp_c)}°c`;

    document.querySelector('.humidity').innerHTML = `${data.current.humidity}%`;

    document.querySelector('.wind').innerHTML = `${data.current.wind_kph}km/hr`;

    document.querySelector('.weather-icon').src =
    `https:${data.current.condition.icon}`;

    document.querySelector('.weather').style.display = 'block';

    document.querySelector('.error').style.display = 'none';


    document.querySelector('.js-input').value ='';
    }
}


