const apiUrl= "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=35b12c8d999fdda2699d5d2204b76ea4";
fetch (apiUrl)
.then((Response)=>Response.json())
.then ((jsObject)=> {
    console.log(jsObject);
  
    const infoPreston = jsObject;
    document.getElementById('currently').textContent=infoPreston.weather[0].main;
    document.getElementById('temperature').textContent=infoPreston.main.temp;
    document.getElementById('windspeed').textContent=infoPreston.wind.speed;
    document.getElementById('humidity').textContent=infoPreston.main.humidity;

}
);