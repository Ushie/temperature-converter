document.getElementById("submitButton").onclick = function(){

    let temp = getTemp();

    if(document.getElementById("fromCelsius").checked){
        if(document.getElementById("toCelsius").checked){
            doofus(temp);
        }
        else if(document.getElementById("toFahrenheit").checked){
            temp = temp + 273.15;
            temp = toFahrenheit(temp);
            print(temp);
        }
        else if(document.getElementById("toKelvin").checked){
            temp = temp + 273.15;
            print(temp);
        }
        else{
            noSelection()
        }
    }
    else if(document.getElementById("fromFahrenheit").checked){
        if(document.getElementById("toCelsius").checked){
            temp = (temp - 32) * 5/9 + 273.15;
            temp = toCelsius(temp);
            print(temp);
        }
        else if(document.getElementById("toFahrenheit").checked){
            doofus(temp);
        }
        else if(document.getElementById("toKelvin").checked){
            temp = (temp - 32) * 5/9 + 273.15;
            print(temp);
        }
        else{
            noSelection()
        }
    }
    else if(document.getElementById("fromKelvin").checked){
        if(document.getElementById("toCelsius").checked){
            temp = toCelsius(temp);
            print(temp);
        }
        else if(document.getElementById("toFahrenheit").checked){
            temp = toFahrenheit(temp);
            print(temp);
        }
        else if(document.getElementById("toKelvin").checked){
            doofus(temp);
        }
        else{
            noSelection()
        }
    }
}

function doofus(temp){
    if(document.getElementById("toCelsius").checked){
        document.getElementById("tempLabel").innerHTML = "you doofus, i refuse to do that.... okay here it is anyways: " + temp + "°C";
    }
    else if(document.getElementById("toFahrenheit").checked){
        document.getElementById("tempLabel").innerHTML = "you doofus, i refuse to do that.... okay here it is anyways: " + temp + "°F";
    }
    else{
        document.getElementById("tempLabel").innerHTML = "you doofus, i refuse to do that.... okay here it is anyways: " + temp + "°K";
    }
}
function print(temp){
    if(document.getElementById("toCelsius").checked){
        document.getElementById("tempLabel").innerHTML = temp + "°C";
    }
    else if(document.getElementById("toFahrenheit").checked){
        document.getElementById("tempLabel").innerHTML = temp + "°F";
    }
    else{
        document.getElementById("tempLabel").innerHTML = temp + "°K";
    }
}
function getTemp(temp){
    temp = document.getElementById("textBox").value;
    return Number(temp);
}
function toCelsius(temp){
    return temp = temp - 273.15;
}
function toFahrenheit(temp){
    return (temp - 273.15) * 9/5 + 32;
}
function noSelection(){
    document.getElementById("tempLabel").innerHTML = "You need to choose both!"
}