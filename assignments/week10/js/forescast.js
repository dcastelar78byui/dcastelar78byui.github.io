const apiUrl= 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=21e36e86016678aa6f98437527607b95';
fetch (apiUrl)
.then((Response)=>Response.json())
.then ((jsObject)=> {
    console.log(jsObject);
    /*filtro datos de los 5 dias siguientes a las 18:00:00)*/
    const fivedayforecast = jsObject.list.filter(x=> x.dt_txt.includes('18:00:00'));
        console.log(fivedayforecast);
     
        for (let i=0; i<fivedayforecast.length;i++){
            document.getElementById(`forecast${i+1}`).textContent=fivedayforecast[i].main.temp;
        }

})