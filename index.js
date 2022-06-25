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
        else if(document.getElementById("toRankine").checked){
            temp = temp + 273.15;
            temp = toRankine(temp);
            print(temp);
        }
        else if(document.getElementById("toRomer").checked){
            temp = temp + 273.15;
            temp = toRomer(temp);
            print(temp);
        }
        else if(document.getElementById("toReaumur").checked){
            temp = temp + 273.15;
            temp = toReaumur(temp);
            print(temp);
        }
        else if(document.getElementById("toNewton").checked){
            temp = temp + 273.15;
            temp = toNewton(temp);
            print(temp);
        }
        else if(document.getElementById("toNewton").checked){
            temp = temp + 273.15;
            temp = toNewton(temp);
            print(temp);
        }
        else if(document.getElementById("toDelisle").checked){
            temp = temp + 273.15;
            temp = toDelisle(temp);
            print(temp);
        }
        else{            
            print(temp);
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
            temp = (temp - 32) * 5/9 + 273.15;
            print(temp);
        }
        else if(document.getElementById("toRankine").checked){
            temp = (temp - 32) * 5/9 + 273.15;
            temp = toRankine(temp);
            print(temp);
        }
        else if(document.getElementById("toRomer").checked){
            temp = (temp - 32) * 5/9 + 273.15;
            temp = toRomer(temp);
            print(temp);
        }
        else if(document.getElementById("toReaumur").checked){
            temp = (temp - 32) * 5/9 + 273.15;
            temp = toReaumur(temp);
            print(temp);
        }
        else if(document.getElementById("toNewton").checked){
            temp = (temp - 32) * 5/9 + 273.15;
            temp = toNewton(temp);
            print(temp);
        }
        else if(document.getElementById("toNewton").checked){
            temp = (temp - 32) * 5/9 + 273.15;
            temp = toNewton(temp);
            print(temp);
        }
        else if(document.getElementById("toDelisle").checked){
            temp = (temp - 32) * 5/9 + 273.15;
            temp = toDelisle(temp);
            print(temp);
        }
        else{            
            print(temp);
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
        else if(document.getElementById("toRankine").checked){
            temp = toRankine(temp);
            print(temp);
        }
        else if(document.getElementById("toRomer").checked){
            temp = toRomer(temp);
            print(temp);
        }
        else if(document.getElementById("toReaumur").checked){
            temp = toReaumur(temp);
            print(temp);
        }
        else if(document.getElementById("toNewton").checked){
            temp = toNewton(temp);
            print(temp);
        }
        else if(document.getElementById("toNewton").checked){
            temp = toNewton(temp);
            print(temp);
        }
        else if(document.getElementById("toDelisle").checked){
            temp = toDelisle(temp);
            print(temp);
        }
        else{            
            print(temp);
        }
    }
    else if(document.getElementById("fromRankine").checked){
        if(document.getElementById("toCelsius").checked){
            temp = temp * 5/9;
            temp = toCelsius(temp);
            print(temp);
        }
        else if(document.getElementById("toFahrenheit").checked){
            temp = temp * 5/9;
            temp = toFahrenheit(temp);
            print(temp);
        }
        else if(document.getElementById("toKelvin").checked){
            temp = temp * 5/9;
            print(temp);
        }
        else if(document.getElementById("toRankine").checked){
            doofus(temp);
        }
        else if(document.getElementById("toRomer").checked){
            temp = temp * 5/9;
            temp = toRomer(temp);
            print(temp);
        }
        else if(document.getElementById("toReaumur").checked){
            temp = temp * 5/9;
            temp = toReaumur(temp);
            print(temp);
        }
        else if(document.getElementById("toNewton").checked){
            temp = temp * 5/9;
            temp = toNewton(temp);
            print(temp);
        }
        else if(document.getElementById("toDelisle").checked){
            temp = temp * 5/9;
            temp = toDelisle(temp);
            print(temp);
        }
        else{            
            print(temp);
        }
    }
    else if(document.getElementById("fromRomer").checked){
        if(document.getElementById("toCelsius").checked){
            temp = (temp - 7.5) / 0.52500 + 273.15;
            temp = toCelsius(temp); 
            print(temp);
        }
        else if(document.getElementById("toFahrenheit").checked){
            temp = (temp - 7.5) / 0.52500 + 273.15;
            temp = toFahrenheit(temp); 
            print(temp);
        }
        else if(document.getElementById("toKelvin").checked){
            temp = (temp - 7.5) / 0.52500 + 273.15;
            print(temp);
        }
        else if(document.getElementById("toRankine").checked){
            temp = (temp - 7.5) / 0.52500 + 273.15;
            temp = toRankine(temp); 
            print(temp);
        }
        else if(document.getElementById("toRomer").checked){
            doofus(temp);
        }
        else if(document.getElementById("toReaumur").checked){
            temp = (temp - 7.5) / 0.52500 + 273.15;
            temp = toReaumur(temp); 
            print(temp);
        }
        else if(document.getElementById("toNewton").checked){
            temp = (temp - 7.5) / 0.52500 + 273.15;
            temp = toNewton(temp); 
            print(temp);
        }
        else if(document.getElementById("toDelisle").checked){
            temp = (temp - 7.5) / 0.52500 + 273.15;
            temp = toDelisle(temp); 
            print(temp);
        }
        else{            
            print(temp);
        }
    }
    else if(document.getElementById("fromReaumur").checked){
        if(document.getElementById("toCelsius").checked){
            temp = temp * 4/5 + 273.15;
            temp = toCelsius(temp); 
            print(temp);
        }
        else if(document.getElementById("toFahrenheit").checked){
            temp = temp * 4/5 + 273.15;
            temp = toFahrenheit(temp); 
            print(temp);
        }
        else if(document.getElementById("toKelvin").checked){
            temp = temp * 4/5 + 273.15;
            print(temp);
        }
        else if(document.getElementById("toRankine").checked){
            temp = temp * 4/5 + 273.15;
            temp = toRankine(temp); 
            print(temp);
        }
        else if(document.getElementById("toRomer").checked){
            temp = temp * 4/5 + 273.15;
            temp = toRomer(temp);
            print(temp);
        }
        else if(document.getElementById("toReaumur").checked){
            doofus(temp);
        }
        else if(document.getElementById("toNewton").checked){
            temp = temp * 4/5 + 273.15;
            temp = toNewton(temp); 
            print(temp);
        }
        else if(document.getElementById("toDelisle").checked){
            temp = temp * 4/5 + 273.15;
            temp = toDelisle(temp); 
            print(temp);
        }
        else{            
            print(temp);
        }
    }
    else if(document.getElementById("fromNewton").checked){
        if(document.getElementById("toCelsius").checked){
            temp = temp * 100/33 + 273.15;
            temp = toCelsius(temp); 
            print(temp);
        }
        else if(document.getElementById("toFahrenheit").checked){
            temp = temp * 100/33 + 273.15;
            temp = toFahrenheit(temp); 
            print(temp);
        }
        else if(document.getElementById("toKelvin").checked){
            temp = temp * 100/33 + 273.15;
            print(temp);
        }
        else if(document.getElementById("toRankine").checked){
            temp = temp * 100/33 + 273.15;
            temp = toRankine(temp); 
            print(temp);
        }
        else if(document.getElementById("toRomer").checked){
            temp = temp * 100/33 + 273.15;
            temp = toRomer(temp);
            print(temp);
        }
        else if(document.getElementById("toReaumur").checked){
            temp = temp * 100/33 + 273.15;
            temp = toReaumur(temp); 
            print(temp);
        }
        else if(document.getElementById("toNewton").checked){
            doofus(temp);
        }
        else if(document.getElementById("toDelisle").checked){
            temp = temp * 100/33 + 273.15;
            temp = toDelisle(temp); 
            print(temp);
        }
        else{            
            print(temp);
        }
    }
    else if(document.getElementById("fromDelisle").checked){
        if(document.getElementById("toCelsius").checked){
            temp = 373.15 - (temp * 2/3);
            temp = toCelsius(temp); 
            print(temp);
        }
        else if(document.getElementById("toFahrenheit").checked){
            temp = 373.15 - (temp * 2/3);
            temp = toFahrenheit(temp); 
            print(temp);
        }
        else if(document.getElementById("toKelvin").checked){
            temp = 373.15 - (temp * 2/3);
            print(temp);
        }
        else if(document.getElementById("toRankine").checked){
            temp = 373.15 - (temp * 2/3);
            temp = toRankine(temp); 
            print(temp);
        }
        else if(document.getElementById("toRomer").checked){
            temp = 373.15 - (temp * 2/3);
            temp = toRomer(temp);
            print(temp);
        }
        else if(document.getElementById("toReaumur").checked){
            temp = 373.15 - (temp * 2/3);
            temp = toReaumur(temp); 
            print(temp);
        }
        else if(document.getElementById("toNewton").checked){
            temp = 373.15 - (temp * 2/3);
            temp = toNewton(temp); 
            print(temp);
        }
        else if(document.getElementById("toDelisle").checked){
            doofus(temp);
        }
        else{            
            print(temp);
        }
    }
    }

function doofus(temp){
    if(document.getElementById("toCelsius").checked){
        document.getElementById("result").innerHTML = "you doofus, i refuse to do that.... okay here it is anyways: " + temp + "°C";
    }
    else if(document.getElementById("toFahrenheit").checked){
        document.getElementById("result").innerHTML = "you doofus, i refuse to do that.... okay here it is anyways: " + temp + "°F";
    }
    else if(document.getElementById("toKelvin").checked){
        document.getElementById("result").innerHTML = "you doofus, i refuse to do that.... okay here it is anyways: " + temp + "°K";
    }
    else if(document.getElementById("toRankine").checked){
        document.getElementById("result").innerHTML = "you doofus, i refuse to do that.... okay here it is anyways: " + temp + "°R";
    }
    else if(document.getElementById("toRomer").checked){
        document.getElementById("result").innerHTML = "you doofus, i refuse to do that.... okay here it is anyways: " + temp + "°Rø";
    }
    else if(document.getElementById("toReaumur").checked){
        document.getElementById("result").innerHTML = "you doofus, i refuse to do that.... okay here it is anyways: " + temp + "°Ré";
    }
    else if(document.getElementById("toNewton").checked){
        document.getElementById("result").innerHTML = "you doofus, i refuse to do that.... okay here it is anyways: " + temp + "°N";
    }
    else{
        document.getElementById("result").innerHTML = "you doofus, i refuse to do that.... okay here it is anyways: " + temp + "°D";
    }
}
function print(temp){
    if(document.getElementById("toCelsius").checked){
        document.getElementById("result").innerHTML = temp + "°C";
    }
    else if(document.getElementById("toFahrenheit").checked){
        document.getElementById("result").innerHTML = temp + "°F";
    }
    else if(document.getElementById("toKelvin").checked){
        document.getElementById("result").innerHTML = temp + "°K";
    }
    else if(document.getElementById("toRankine").checked){
        document.getElementById("result").innerHTML = temp + "°R";
    }
    else if(document.getElementById("toRomer").checked){
        document.getElementById("result").innerHTML = temp + "°Rø";
    }
    else if(document.getElementById("toReaumur").checked){
        document.getElementById("result").innerHTML = temp + "°Ré";
    }
    else if(document.getElementById("toNewton").checked){
        document.getElementById("result").innerHTML = temp + "°N";
    }
    else if(document.getElementById("toDelisle").checked){
        document.getElementById("result").innerHTML = temp + "°D";
    }
    else{
        document.getElementById("result").innerHTML = "You need to choose both!"
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
function toRankine(temp){
    return temp * 1.8;
}
function toRomer(temp){
    return (temp - 273.15) * 21/40 + 7.5;
}
function toReaumur(temp){
    return (temp - 273.15) * 0.8;
}
function toNewton(temp){
    return (temp - 273.15) * 0.33000;
}
function toDelisle(temp){
    return (temp - 273.15) * 1.5000-100.00;
}