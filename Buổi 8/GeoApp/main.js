const urlRoot = 'https://api.openweathermap.org/data/2.5/weather'
const APIKey = '5df05bc076893c916781fb47294443bf'
const inputLocation = document.getElementById('location-input')


/// Gọi dữ liệu từ API bằng ajax Jquery
function getData(inputLocationValue){
    $.ajax({
        url: `${urlRoot}?q=${inputLocationValue}&&appid=${APIKey}`,
        type: 'GET',
        dataType: 'json', 
        success: function(res) {
            console.log('Get API successful');
            data = res;
            renderData(data);
        }
    });
}
getData(inputLocation.value)

/// Search for location
document.getElementById('submit').onclick = function() {
    getData(inputLocation.value)
}

/// Render Data
function renderData(data){

    // Lấy giá trị object
    locaTime = formatLocalTime(data.timezone)
    locaDate = formatLocalDate(data.timezone)
    locaTemp = transformToCelcius(data.main.temp)
    locaFeelsLike = transformToCelcius(data.main.feels_like)
    locaWeatherCondition = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)
    locaWindSpeed = data.wind.speed.toFixed(1)
    locaHumidity = data.main.humidity
    locaVisibility = (data.visibility / 1000).toFixed(1)
    locaPressure = data.main.pressure


    var html = ''
    html = 
    `
    <span>${locaDate}, ${locaTime}</span>
    <h2>${data.name}, ${data.sys.country}</h2>
    <div class="degree-container">
        <div class="degree-numer">${locaTemp}°C</div>
    </div>
    <div class="feeling-note">
        <div class="feeling">Feels like ${locaFeelsLike}°C.</div>
        <div class="cloud">${locaWeatherCondition}</div>
        <div class="light"></div>
    </div>
    <div class="info-note">
        <div class="col-6 col-6-in">
            <div class="weather-note">${locaWindSpeed}m/s SSE</div>
            <div class="weather-note">Humidity: ${locaHumidity}%</div>
            <div class="weather-note">Visibility: ${locaVisibility}km</div>
        </div>
        <div class="col-6">
            <div class="weather-note">${locaPressure}hPa</div>
            <div class="weather-note">Dew point: 20°C</div>
        </div>
    </div>
    `
    var weatherTable = document.getElementById('weather-info-col');
    weatherTable.innerHTML = html;
}


/// Rendering: Lấy time từ UTC shifting
function getIANATimezone(utcOffsetSeconds) {
    const utcOffsetHours = Math.abs(utcOffsetSeconds / 3600);
    const sign = (utcOffsetSeconds < 0 ) ? '+': '-';
    return `Etc/GMT${sign}${utcOffsetHours}`;
}

function formatLocalTime(utcOffsetSeconds) {
    const timeZone = getIANATimezone(utcOffsetSeconds);
    return new Date().toLocaleTimeString('en-US', { timeZone });
}

function formatLocalDate(utcOffsetSeconds) {
    const timeZone = getIANATimezone(utcOffsetSeconds);
    return new Date().toLocaleDateString('en-US', { timeZone });
}


/// Rendering: Đổi từ Kelving sang Celcius
function transformToCelcius(degKelvin) {
    const degree = degKelvin - 273;
    return Number(degree).toFixed(2);   
}











//// Array destructoring và object destructoring
