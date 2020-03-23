function calculationWindChill(){

    var temp =  parseFloat(document.getElementById("Enter temperature (°F").textContent);
    var windS =  parseFloat(document.getElementById("Enter Wind Velocity (mph)").textContent);
    var windInfo = 'N/A';
    var t=0;
    var s=35.75;
    var aux=0;
    var potencia=windS**0.16;

    if ((temp <= 50) && (windS>=3.0)) {
        t=0.6215*temp;
        aux= 0.4275*temp;
        
        windInfo = 35.74 + t - (s*potencia) + (aux * potencia);
        Math.round(windInfo);
    }
    document.getElementById("windchill").textContent = windInfo;
}