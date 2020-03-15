    
    function forecast (){
    const apiUrl1= 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=21e36e86016678aa6f98437527607b95';
    fetch (apiUrl1)
    .then((Response)=>Response.json())
    .then ((jsObject)=> {
        /*console.log(jsObject);*/
        /*filtro datos de los 5 dias siguientes a las 18:00:00)*/
        const fivedayforecast = jsObject.list.filter(x=> x.dt_txt.includes('18:00:00'));
            console.log(fivedayforecast);
            const currentDay = new Date().getDay();
            const weekDay= [];
                weekDay[0] = "SUN";
                weekDay[1] = "MON";
                weekDay[2] = "TUE";
                weekDay[3] = "WED";
                weekDay[4] = "THU";
                weekDay[5] = "FRI";
                weekDay[6] = "SAT";

        let cont = currentDay;
        
        for (let i = 0; i < fivedayforecast.length; i++) {
               if(cont == 7){
                cont = 0;
            }
            let h4 = document.createElement('h4');
            let div = document.createElement('div');
            let image = document.createElement('img');
            let p = document.createElement('p');

            h4.textContent = weekDay[cont];
            div.appendChild(h4);

            let icon = fivedayforecast[i].weather[0].icon;
            image.setAttribute('src', 'https://openweathermap.org/img/w/' + icon + '.png');
            image.setAttribute('alt', fivedayforecast[i].weather[0].description);
            div.appendChild(image);

            p.textContent = fivedayforecast[i].main.temp.toFixed(0)+' F';
            div.appendChild(p);

            document.querySelector('div.boxclima').appendChild(div);
            cont++;
        }
    }
    )

    };