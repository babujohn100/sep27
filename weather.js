let request = new XMLHttpRequest();
let APIKEY = "914f242d21f57a043570323c02e61c5a";

function displayNicely(apiData) {

    apiData = JSON.parse(apiData);

    console.log(apiData);

    htmlString = apiData.name + " " + apiData.weather[0].description;

    htmlString += `<img src="https://openweathermap.org/img/w/${apiData.weather[0].icon}.png">` +"<br />" ;
    
    // htmlString += `<img src="https://openweathermap.org/forecast5/${apiData.weather[0].icon}.png">`;
    
    let temp = (apiData.main.temp - 273.15).toFixed(2);
    
    let pressure = (apiData.main.pressure).toFixed(2);
    
    let wind = (apiData.wind.speed).toFixed(2) ;

    htmlString += "Temperature: " + temp +"<br />" ;
    
    
    htmlString += " pressure: " + pressure +"<br />" ;
    
    htmlString += " wind: " + wind +"<br />"  ;
    
    // create htmlString here

    document.getElementById("weatherData").innerHTML = htmlString;



}

function submitCity(argument) {

    let cityName = document.getElementById("cityForm")["city"].value;

    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=" + APIKEY);
    request.send();

    // body...
}

request.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            displayNicely(this.responseText);

        }
        else if (this.status == 404) {

            document.getElementById("weatherData").innerHTML = "<h2> city not found! Please try again.</h2>";
        }
    }
};



// FEATURES CAN BE ADDED EXTRA:

// the temperature in degree celcious(currently it is in kelvin)

// the current air pressure and wind speed

// the data to be styled and presented nicely


// bonus round

// use the documentation here: https://openweathermap.org/forecast5
// create another button that displays a forecast for the city

// think about the logic needed to do this. can it be done with the current functions?
// do they need to be duplicated?



























