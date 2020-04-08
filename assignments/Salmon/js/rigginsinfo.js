

const apiUrl= 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=21e36e86016678aa6f98437527607b95';
fetch (apiUrl)
.then((Response)=>Response.json())
.then ((jsObject)=> {
    console.log(jsObject);
  
    const infoRiggins = jsObject;
               


let h4 = document.createElement('h4');
let div = document.createElement('div');
let image = document.createElement('img');
let pdetalle = document.createElement('p');
let p = document.createElement('p');
let pmax = document.createElement('p');
let pmin = document.createElement('p');

h4.textContent = "Weather in Riggins";
div.appendChild(h4);

let icon = infoRiggins.weather[0].icon;
image.setAttribute('src', 'https://openweathermap.org/img/w/' + icon + '.png');
image.setAttribute('alt', infoRiggins.weather[0].description);
div.appendChild(image);
pdetalle.textContent = infoRiggins.weather[0].description ;
div.appendChild(pdetalle);



pmax.textContent = "Temp Max......" + infoRiggins.main.temp_max +' °F';
div.appendChild(pmax);
pmin.textContent = "Temp Min......" + infoRiggins.main.temp_min +' °F';
div.appendChild(pmin);
p.textContent = "Temp Now......" + infoRiggins.main.temp +' °F';
div.appendChild(p);

document.querySelector('div.tiempo').appendChild(div);
}
);