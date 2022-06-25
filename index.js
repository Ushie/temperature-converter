document.getElementById("submitButton").onclick = function(){

    let temp = getTemp();

    let selection = getSelection();

    if(document.getElementById("fromCelsius").checked){
        switch(true){
            case selection == 1:
                doofus(temp);
                break;
            case selection == 2:
                temp = temp + 273.15;
                temp = toFahrenheit(temp);
                print(temp);
                break;
            case selection == 3:
                temp = temp + 273.15;
                print(temp);
                break;
            case selection == 4:    
                temp = temp + 273.15;
                temp = toRankine(temp);
                print(temp);
                break;
            case selection == 5: 
                temp = temp + 273.15;
                temp = toRomer(temp);
                print(temp);
            case selection == 6:
                temp = temp + 273.15;
                temp = toReaumur(temp);
                print(temp);
                break;
            case selection == 7:
                temp = temp + 273.15;
                temp = toNewton(temp);
                print(temp);
                break;
            case selection == 8:
                temp = temp + 273.15;
                temp = toDelisle(temp);
                print(temp);
                break;
            default:  
                print(temp);
                break;
        }
    }
    else if(document.getElementById("fromFahrenheit").checked){
        switch(true){
            case selection == 1:
                temp = (temp - 32) * 5/9 + 273.15;
                temp = toCelsius(temp);
                print(temp);
                break;
            case selection == 2:
                doofus(temp);
                break;
            case selection == 3:
                temp = (temp - 32) * 5/9 + 273.15;
                print(temp);
                break;
            case selection == 4:      
                temp = (temp - 32) * 5/9 + 273.15;
                temp = toRankine(temp);
                print(temp);
                break;
            case selection == 5:
                temp = (temp - 32) * 5/9 + 273.15;
                temp = toRomer(temp);
                print(temp);
                break;
            case selection == 6:
                temp = (temp - 32) * 5/9 + 273.15;
                temp = toReaumur(temp);
                print(temp);
                break;
            case selection == 7:
                temp = (temp - 32) * 5/9 + 273.15;
                temp = toNewton(temp);
                print(temp);
                break;
            case selection == 8:
                temp = (temp - 32) * 5/9 + 273.15;
                temp = toDelisle(temp);
                print(temp);
                break;
            default:
                print(temp);
        }
    }
    else if(document.getElementById("fromKelvin").checked){
        switch(true){
            case selection == 1:
                temp = toCelsius(temp);
                print(temp);
                break;
            case selection == 2:
                temp = toFahrenheit(temp);
                print(temp);
                break;
            case selection == 3:
                doofus(temp);
                break;
            case selection == 4:
                temp = toRankine(temp);
                print(temp);
                break;
            case selection == 5:
                temp = toRomer(temp);
                print(temp);
                break;
            case selection == 6:
                temp = toReaumur(temp);
                print(temp);
                break;
            case selection == 7:
                temp = toNewton(temp);
                print(temp);
                break;
            case selection == 8:
                temp = toDelisle(temp);
                print(temp);
                break;
            default:
                print(temp);
        }
    }
    else if(document.getElementById("fromRankine").checked){
        switch(true){
            case selection == 1:
                temp = temp * 5/9;
                temp = toCelsius(temp);
                print(temp);
                break;
            case selection == 2:
                temp = temp * 5/9;
                temp = toFahrenheit(temp);
                print(temp);
                break;
            case selection == 3:
                temp = temp * 5/9;
                print(temp);
                break;
            case selection == 4:
                doofus(temp);
                break;
            case selection == 5:
                temp = temp * 5/9;
                temp = toRomer(temp);
                print(temp);
            case selection == 6:
                temp = temp * 5/9;
                temp = toReaumur(temp);
                print(temp);
                break;
            case selection == 7:
                temp = temp * 5/9;
                temp = toNewton(temp);
                print(temp);
                break;
            case selection == 8:
                temp = temp * 5/9;
                temp = toDelisle(temp);
                print(temp);
                break;
            default:
                print(temp);
        }
    }
    else if(document.getElementById("fromRomer").checked){
        switch(true){
            case selection == 1:
                temp = (temp - 7.5) / 0.52500 + 273.15;
                temp = toCelsius(temp); 
                print(temp);
                break;
            case selection == 2:
                temp = (temp - 7.5) / 0.52500 + 273.15;
                temp = toFahrenheit(temp); 
                print(temp);
                break;
            case selection == 3:
                temp = (temp - 7.5) / 0.52500 + 273.15;
                print(temp);
                break;
            case selection == 4:
                temp = (temp - 7.5) / 0.52500 + 273.15;
                temp = toRankine(temp); 
                print(temp);
                break;
            case selection == 5:
                doofus(temp);
                break;
            case selection == 6:
                temp = (temp - 7.5) / 0.52500 + 273.15;
                temp = toReaumur(temp); 
                print(temp);
                break;
            case selection == 7:
                temp = (temp - 7.5) / 0.52500 + 273.15;
                temp = toNewton(temp); 
                print(temp);
                break;
            case selection == 8:
                temp = (temp - 7.5) / 0.52500 + 273.15;
                temp = toDelisle(temp); 
                print(temp);
                break;
            default:
                print(temp);
        }
    }
    else if(document.getElementById("fromReaumur").checked){
        switch(true){
            case selection == 1:
                temp = temp * 4/5 + 273.15;
                temp = toCelsius(temp); 
                print(temp);
                break;
            case selection == 2:
                temp = temp * 4/5 + 273.15;
                temp = toFahrenheit(temp); 
                print(temp);
                break;
            case selection == 3:
                temp = temp * 4/5 + 273.15;
                print(temp);
                break;
            case selection == 4:
                temp = temp * 4/5 + 273.15;
                temp = toRankine(temp); 
                print(temp);
                break;
            case selection == 5:
                temp = temp * 4/5 + 273.15;
                temp = toRomer(temp);
                print(temp);
                break;
            case selection == 6:
                doofus(temp);
                break;
            case selection == 7:
                temp = temp * 4/5 + 273.15;
                temp = toNewton(temp); 
                print(temp);
                break;
            case selection == 8:
                temp = temp * 4/5 + 273.15;
                temp = toDelisle(temp); 
                print(temp);
                break;
            default:
                print(temp);
        }
    }
    else if(document.getElementById("fromNewton").checked){
        switch(true){
            case selection == 1:
                temp = temp * 100/33 + 273.15;
                temp = toCelsius(temp); 
                print(temp);
                break;
            case selection == 2:
                temp = temp * 100/33 + 273.15;
                temp = toFahrenheit(temp); 
                print(temp);
                break;
            case selection == 3:
                temp = temp * 100/33 + 273.15;
                print(temp);
                break;
            case selection == 4:
                temp = temp * 100/33 + 273.15;
                temp = toRankine(temp); 
                print(temp);
                break;
            case selection == 5:
                temp = temp * 100/33 + 273.15;
                temp = toRomer(temp);
                print(temp);
                break;
            case selection == 6:
                temp = temp * 100/33 + 273.15;
                temp = toReaumur(temp); 
                print(temp);
                break;
            case selection == 7:
                doofus(temp);
                break;
            case selection == 8:
                temp = temp * 100/33 + 273.15;
                temp = toDelisle(temp); 
                print(temp);
                break;
            default:
                print(temp);
        }
    }
    else if(document.getElementById("fromDelisle").checked){
        switch(true){
            case selection == 1:
                temp = 373.15 - (temp * 2/3);
                temp = toCelsius(temp); 
                print(temp);
                break;
            case selection == 2:
                temp = 373.15 - (temp * 2/3);
                temp = toFahrenheit(temp); 
                print(temp);
                break;
            case selection == 3:
                temp = 373.15 - (temp * 2/3);
                print(temp);
                break;
            case selection == 4:
                temp = 373.15 - (temp * 2/3);
                temp = toRankine(temp); 
                print(temp);
                break;
            case selection == 5:
                temp = 373.15 - (temp * 2/3);
                temp = toRomer(temp);
                print(temp);
                break;
            case selection == 6:
                temp = 373.15 - (temp * 2/3);
                temp = toReaumur(temp); 
                print(temp);
                break;
            case selection == 7:
                temp = 373.15 - (temp * 2/3);
                temp = toNewton(temp); 
                print(temp);
                break;
            case selection == 8:
                doofus(temp);
                break;
            default:
                print(temp);
        }
    }
}

function doofus(temp){
    if(document.getElementById("toCelsius").checked){
        document.getElementById("result").innerHTML = `you doofus, i refuse to do that.... okay here it is anyways: ${temp} °C`;
    }
    else if(document.getElementById("toFahrenheit").checked){
        document.getElementById("result").innerHTML = `you doofus, i refuse to do that.... okay here it is anyways: ${temp} °F`;
    }
    else if(document.getElementById("toKelvin").checked){
        document.getElementById("result").innerHTML = `you doofus, i refuse to do that.... okay here it is anyways: ${temp} °K`;
    }
    else if(document.getElementById("toRankine").checked){
        document.getElementById("result").innerHTML = `you doofus, i refuse to do that.... okay here it is anyways: ${temp} °R`;
    }
    else if(document.getElementById("toRomer").checked){
        document.getElementById("result").innerHTML = `you doofus, i refuse to do that.... okay here it is anyways: ${temp} °Rø`;
    }
    else if(document.getElementById("toReaumur").checked){
        document.getElementById("result").innerHTML = `you doofus, i refuse to do that.... okay here it is anyways: ${temp} °Ré`;
    }
    else if(document.getElementById("toNewton").checked){
        document.getElementById("result").innerHTML = `you doofus, i refuse to do that.... okay here it is anyways: ${temp} °N`;
    }
    else{
        document.getElementById("result").innerHTML = `you doofus, i refuse to do that.... okay here it is anyways: ${temp} °D`;
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
function getSelection(selection){
    if(document.getElementById("toCelsius").checked){
        selection = 1;
    }
    else if(document.getElementById("toFahrenheit").checked){
        selection = 2;
    }
    else if(document.getElementById("toKelvin").checked){
        selection = 3;
    }
    else if(document.getElementById("toRankine").checked){
        selection = 4;
    }
    else if(document.getElementById("toRomer").checked){
        selection = 5;
    }
    else if(document.getElementById("toReaumur").checked){
        selection = 6;
    }
    else if(document.getElementById("toNewton").checked){
        selection = 7;
    }
    else{
        selection = 8;
    }
    return Number(selection);
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