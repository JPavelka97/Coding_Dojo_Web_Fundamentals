function eat_cookies(cookiebar){
    document.querySelector(cookiebar).remove();
}

function changeTemperatureFormat(){
    if(document.querySelector('#current').value == "°F"){
        for(var i=1; i<=8; i++){
            var temperature = document.querySelector("#temp"+i).innerText;
            temperature = Math.floor((temperature * 9 / 5) + 32);
            document.querySelector("#temp"+i).innerText = temperature;
        }
    }
    else{
        for(var i=1; i<=8; i++){
            var temperature = document.querySelector("#temp"+i).innerText;
            temperature = Math.ceil((temperature - 32) * 5/9);
            document.querySelector("#temp"+i).innerText = temperature;
        }
    }
}