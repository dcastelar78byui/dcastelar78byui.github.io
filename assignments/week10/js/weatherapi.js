const apiUrl= 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=21e36e86016678aa6f98437527607b95';
fetch (apiUrl)
.then((Response)=>Response.json())
.then ((jsObject)=> {
    console.log(jsObject);
    const currentTemp = document.querySelector
    ('#current-temp');
    const weatherIcon = document.querySelector
    ('#imagesrc');
   
    currentTemp.textContent = jsObject.main.temp;

    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png` // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
        
        
        

});