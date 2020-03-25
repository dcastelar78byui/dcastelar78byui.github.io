const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
            console.table(jsonObject); 
            const towns = jsonObject['towns'];

            for (let i = 0; i < towns.length; i++) {   //source Alicia Schreiner
                if ( towns[i].name == "Preston") {
                    let infop = document.createElement('section');
                    let events = document.createElement('p');
                    for (let f=0; f< towns[i].events.length;f++){
                        events.innerHTML += towns[i].events[f] + ".<br>";
                        document.querySelector('div.events').appendChild(events);

                    
                }
            }}})