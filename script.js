
function search() {
    city = document.getElementById('city').value;

    API_key = '1d59e027aacef567210decbae6121fc1'
    Applink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`
    fetch(Applink)
        .then(res => res.json())
        .then(data => {
            kelvin = data.main.temp;
            celsius = kelvin - 273.15;

            temp = document.getElementById("temperature")
            temp.innerHTML = `${celsius.toPrecision(2)} `

            des = document.getElementById("description")
            des.innerHTML = `${data.weather[0].description}`

            humidity = data.main.humidity;
            humid = document.getElementById('humid')
            humid.innerHTML = `${humidity}`
            
            windSpeed = document.getElementById('windSpeed')
            windSpeed.innerHTML = `${data.wind.speed}`
            switch (data.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png';
                break;
            case 'Clouds':
                image.src = 'images/cloud.png';
                break;
            case 'Rain':
                image.src = 'images/rain.png';
                break;
            case 'Snow':
                image.src = 'images/snow.png';
                break;
            case 'Mist':
                image.src = 'images/mist.png';
                break;
            case 'Haze':
                image.src = 'images/mist.png';
                break;


            default:
                image.src = 'images/cloud.png';


}



            
            

        });
        
}