function getRandomTemperature() {
    var k = Math.floor(Math.random() * 30) + 10; // Generates a random number between 10 and 40
    if(k<30)
      return getRandomTemperature();
    else
      return k;
  }
  function getRandomForecast() {
    const forecasts = ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy', 'Thunderstorms'];
    return forecasts[Math.floor(Math.random() * forecasts.length)];
  }
  function generateWeatherCards() {
    const weatherContainer = document.getElementById('weather-container');
    
    for (let i = 0; i < 7; i++) {
      const weatherCard = document.createElement('div');
      weatherCard.classList.add('weather-card');
      
      const dayHeading = document.createElement('h3');
      dayHeading.textContent = getDayOfWeek(i);
      weatherCard.appendChild(dayHeading);
      
      const temperature = document.createElement('p');
      temperature.classList.add('temperature');
      temperature.textContent = getRandomTemperature() + '°C';
      weatherCard.appendChild(temperature);
      
      const forecast = document.createElement('p');
      forecast.classList.add('forecast');
      forecast.textContent = getRandomForecast();
      weatherCard.appendChild(forecast);
      
      weatherContainer.appendChild(weatherCard);
    }
  }
  function getDayOfWeek(offset) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const index = (today.getDay() + offset) % 7;
    return daysOfWeek[index];
  }
  window.addEventListener('load', generateWeatherCards);
  