const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

.then(function(jsonObject){
    const towns = jsonObject['towns'];
  
  
 
for (let i = 0; i<towns.length; i++ ) {
    if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name == 'Soda Springs'){
   
        let card= document.createElement('section');
        let h2= document.createElement('h2');
        let h3= document.createElement('h3');
        let foundation= document.createElement('p');
        let population= document.createElement('p');
        let rain= document.createElement('p');
        let foto= document.createElement('img');


   h2.textContent= towns[i].name;
   h3.textContent= towns[i].motto;
   foundation.textContent= 'Year Foundation: ' + towns[i].yearFounded;
   population.textContent= 'Population: ' + towns[i].currentPopulation;
   rain.textContent= 'Annual Rainfall: ' + towns[i].averageRainfall;
   foto.setAttribute('src',"images/"+towns[i].photo);
   foto.setAttribute('alt', "picture of: " + towns[i].name);

  

   card.appendChild(h2);
   card.appendChild(h3);
   card.appendChild(foundation);
   card.appendChild(population);
   card.appendChild(rain);
   card.appendChild(foto);

   document.querySelector('div.cards').appendChild(card)
    }}
});
