document.getElementById("submitButton").onclick = function(){

    let temp = getTemp();

    let selection = getSelection();

    if(document.getElementById("fromCelsius").checked){
        switch(selection){
            case 1:
                doofus(temp);
                break;
            case 2:
                temp = temp + 273.15;
                temp = toFahrenheit(temp);
                break;
            case 3:
                temp = temp + 273.15;
                break;
            case 4:    
                temp = temp + 273.15;
                temp = toRankine(temp);
                break;
            case 5: 
                temp = temp + 273.15;
                temp = toRomer(temp);
            case 6:
                temp = temp + 273.15;
                temp = toReaumur(temp);
                break;
            case 7:
                temp = temp + 273.15;
                temp = toNewton(temp);
                break;
            case 8:
                temp = temp + 273.15;
                temp = toDelisle(temp);
                break;
        }
        if(selection != 1){
            print(temp, unit);
        }
    }
    else if(document.getElementById("fromFahrenheit").checked){
        switch(selection){
            case 1:
                temp = (temp - 32) * 5/9 + 273.15;
                temp = toCelsius(temp);
                break;
            case 2:
                doofus(temp);
                break;
            case 3:
                temp = (temp - 32) * 5/9 + 273.15;
                break;
            case 4:      
                temp = (temp - 32) * 5/9 + 273.15;
                temp = toRankine(temp);
                break;
            case 5:
                temp = (temp - 32) * 5/9 + 273.15;
                temp = toRomer(temp);
                break;
            case 6:
                temp = (temp - 32) * 5/9 + 273.15;
                temp = toReaumur(temp);
                break;
            case 7:
                temp = (temp - 32) * 5/9 + 273.15;
                temp = toNewton(temp);
                break;
            case 8:
                temp = (temp - 32) * 5/9 + 273.15;
                temp = toDelisle(temp);
                break;
        }
        if(selection != 2){
            print(temp, unit);
        }
    }
    else if(document.getElementById("fromKelvin").checked){
        switch(selection){
            case 1:
                temp = toCelsius(temp);
                break;
            case 2:
                temp = toFahrenheit(temp);
                break;
            case 3:
                doofus(temp);
                break;
            case 4:
                temp = toRankine(temp);
                break;
            case 5:
                temp = toRomer(temp);
                break;
            case 6:
                temp = toReaumur(temp);
                break;
            case 7:
                temp = toNewton(temp);
                break;
            case 8:
                temp = toDelisle(temp);
                break;
        }
        if(selection != 3){
            print(temp, unit);
        }
    }
    else if(document.getElementById("fromRankine").checked){
        switch(selection){
            case 1:
                temp = temp * 5/9;
                temp = toCelsius(temp);
                break;
            case 2:
                temp = temp * 5/9;
                temp = toFahrenheit(temp);
                break;
            case 3:
                temp = temp * 5/9;
                break;
            case 4:
                doofus(temp);
                break;
            case 5:
                temp = temp * 5/9;
                temp = toRomer(temp);
            case 6:
                temp = temp * 5/9;
                temp = toReaumur(temp);
                break;
            case 7:
                temp = temp * 5/9;
                temp = toNewton(temp);
                break;
            case 8:
                temp = temp * 5/9;
                temp = toDelisle(temp);
                break;
        }
        if(selection != 4){
            print(temp, unit);
        }
    }
    else if(document.getElementById("fromRomer").checked){
        switch(selection){
            case 1:
                temp = (temp - 7.5) / 0.52500 + 273.15;
                temp = toCelsius(temp); 
                break;
            case 2:
                temp = (temp - 7.5) / 0.52500 + 273.15;
                temp = toFahrenheit(temp); 
                break;
            case 3:
                temp = (temp - 7.5) / 0.52500 + 273.15;
                break;
            case 4:
                temp = (temp - 7.5) / 0.52500 + 273.15;
                temp = toRankine(temp); 
                break;
            case 5:
                doofus(temp);
                break;
            case 6:
                temp = (temp - 7.5) / 0.52500 + 273.15;
                temp = toReaumur(temp); 
                break;
            case 7:
                temp = (temp - 7.5) / 0.52500 + 273.15;
                temp = toNewton(temp); 
                break;
            case 8:
                temp = (temp - 7.5) / 0.52500 + 273.15;
                temp = toDelisle(temp); 
                break;
        }
        if(selection != 5){
            print(temp, unit);
        }
    }
    else if(document.getElementById("fromReaumur").checked){
        switch(selection){
            case 1:
                temp = temp * 4/5 + 273.15;
                temp = toCelsius(temp); 
                break;
            case 2:
                temp = temp * 4/5 + 273.15;
                temp = toFahrenheit(temp); 
                break;
            case 3:
                temp = temp * 4/5 + 273.15;
                break;
            case 4:
                temp = temp * 4/5 + 273.15;
                temp = toRankine(temp); 
                break;
            case 5:
                temp = temp * 4/5 + 273.15;
                temp = toRomer(temp);
                break;
            case 6:
                doofus(temp);
                break;
            case 7:
                temp = temp * 4/5 + 273.15;
                temp = toNewton(temp); 
                break;
            case 8:
                temp = temp * 4/5 + 273.15;
                temp = toDelisle(temp); 
                break;
        }
        if(selection != 6){
            print(temp, unit);
        }
    }
    else if(document.getElementById("fromNewton").checked){
        switch(selection){
            case 1:
                temp = temp * 100/33 + 273.15;
                temp = toCelsius(temp); 
                break;
            case 2:
                temp = temp * 100/33 + 273.15;
                temp = toFahrenheit(temp); 
                break;
            case 3:
                temp = temp * 100/33 + 273.15;
                break;
            case 4:
                temp = temp * 100/33 + 273.15;
                temp = toRankine(temp); 
                break;
            case 5:
                temp = temp * 100/33 + 273.15;
                temp = toRomer(temp);
                break;
            case 6:
                temp = temp * 100/33 + 273.15;
                temp = toReaumur(temp); 
                break;
            case 7:
                doofus(temp);
                break;
            case 8:
                temp = temp * 100/33 + 273.15;
                temp = toDelisle(temp); 
                break;
        }
        if(selection != 7){
            print(temp, unit);
        }
    }
    else if(document.getElementById("fromDelisle").checked){
        switch(selection){
            case 1:
                temp = 373.15 - (temp * 2/3);
                temp = toCelsius(temp); 
                break;
            case 2:
                temp = 373.15 - (temp * 2/3);
                temp = toFahrenheit(temp); 
                break;
            case 3:
                temp = 373.15 - (temp * 2/3);
                break;
            case 4:
                temp = 373.15 - (temp * 2/3);
                temp = toRankine(temp); 
                break;
            case 5:
                temp = 373.15 - (temp * 2/3);
                temp = toRomer(temp);
                break;
            case 6:
                temp = 373.15 - (temp * 2/3);
                temp = toReaumur(temp); 
                break;
            case 7:
                temp = 373.15 - (temp * 2/3);
                temp = toNewton(temp); 
                break;
            case 8:
                doofus(temp);
                break;
        }
        if(selection != 8){
            print(temp, unit);
        }
    }
}

function doofus(temp){
    document.getElementById("result").innerHTML = `you doofus, i refuse to do that.... okay here it is anyways: ${temp}°${unit}`;
}
function print(temp, unit, selection){
    switch(selection){
        case 0:
            document.getElementById("result").innerHTML = "You need to choose both!"
            break;
        default:
            document.getElementById("result").innerHTML = temp + `°${unit}`;
            break;
    }
}
function getTemp(temp){
    temp = document.getElementById("textBox").value;
    return Number(temp);
}
function getSelection(selection){
    if(document.getElementById("toCelsius").checked){
        unit = "C";
        selection = 1;
    }
    else if(document.getElementById("toFahrenheit").checked){
        unit = "F";
        selection = 2;
    }
    else if(document.getElementById("toKelvin").checked){
        unit = "K";
        selection = 3;
    }
    else if(document.getElementById("toRankine").checked){
        unit = "R";
        selection = 4;
    }
    else if(document.getElementById("toRomer").checked){
        unit = "Rø";
        selection = 5;
    }
    else if(document.getElementById("toReaumur").checked){
        unit = "Ré";
        selection = 6;
    }
    else if(document.getElementById("toNewton").checked){
        unit = "N";
        selection = 7;
    }
    else{
        unit = "D";
        selection = 8;
    }
    return Number(selection);
}
function toCelsius(temp){
    return temp - 273.15;
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