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
        }
    });
}

/// Search for location
document.getElementById('submit').onclick = function() {
    getData(inputLocation.value)
}

/// Render Data
function renderData(data){

    // Lấy giá trị object

    const {main,name,timezone,weather,sys} = data

    // var html = ''
    // for (const item of data) {
    //     html = 
    //     `
    //     <span>Nov 21, 09:15pm</span>
    //     <h2>Ha Noi, VN</h2>
    //     <div class="degree-container">
    //         <div class="degree-numer">25°C</div>
    //     </div>
    //     <div class="feeling-note">
    //         <div class="feeling">Feels like 26°C.</div>
    //         <div class="cloud">Overcast clouds.</div>
    //         <div class="light">Light breeze</div>
    //     </div>
    //     <div class="info-note">
    //         <div class="col-6 col-6-in">
    //             <div class="weather-note">2.2m/s SSE</div>
    //             <div class="weather-note">Humidity: 75%</div>
    //             <div class="weather-note">Visibility: 10.0km</div>
    //         </div>
    //         <div class="col-6">
    //             <div class="weather-note">1011hPa</div>
    //             <div class="weather-note">Dew point: 20°C</div>
    //         </div>
    //     </div>
    //     `
    // }
    // var weatherTable = document.getElementById('weather-info-col');
    // weatherTable.innerHTML = html;
}


//// Array destructoring và object destructoring
