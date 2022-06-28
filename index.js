document.getElementById("submitButton").onclick = function(){

    let temp = getTemp();

    let fromSelection = getFromSelection();
    let toSelection = getToSelection();

    switch(fromSelection){
        case 1:{
            const toKelvin = temp = temp + 273.15;
            switch(toSelection){
                case 1:
                    doofus(temp);
                    break;
                case 2:
                    toKelvin;
                    temp = toFahrenheit(temp);
                    break;
                case 3:
                    toKelvin;
                    break;
                case 4:    
                    toKelvin;
                    temp = toRankine(temp);
                    break;
                case 5: 
                    toKelvin;
                    temp = toRomer(temp);
                case 6:
                    toKelvin;
                    temp = toReaumur(temp);
                    break;
                case 7:
                    toKelvin;
                    temp = toNewton(temp);
                    break;
                case 8:
                    toKelvin;
                    temp = toDelisle(temp);
                    break;
            }
            if(toSelection != 1){
                print(temp, unit);
            }
        }
        break;
        case 2:{
            const toKelvin = temp = (temp - 32) * 5/9 + 273.15;
            switch(toSelection){
                case 1:
                    toKelvin;
                    temp = toCelsius(temp);
                    break;
                case 2:
                    doofus(temp);
                    break;
                case 3:
                    toKelvin;
                    break;
                case 4:      
                    toKelvin;
                    temp = toRankine(temp);
                    break;
                case 5:
                    toKelvin;
                    temp = toRomer(temp);
                    break;
                case 6:
                    toKelvin;
                    temp = toReaumur(temp);
                    break;
                case 7:
                    toKelvin;
                    temp = toNewton(temp);
                    break;
                case 8:
                    toKelvin;
                    temp = toDelisle(temp);
                    break;
            }
            if(toSelection != 2){
                print(temp, unit);
            }
        }
        break;
        case 3:{
            switch(toSelection){
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
            if(toSelection != 3){
                print(temp, unit);
            }
        }
        break;
        case 4:{
            const toKelvin = temp = temp * 5/9;
            switch(toSelection){
                case 1:
                    toKelvin;
                    temp = toCelsius(temp);
                    break;
                case 2:
                    toKelvin;
                    temp = toFahrenheit(temp);
                    break;
                case 3:
                    toKelvin;
                    break;
                case 4:
                    doofus(temp);
                    break;
                case 5:
                    toKelvin;
                    temp = toRomer(temp);
                case 6:
                    toKelvin;
                    temp = toReaumur(temp);
                    break;
                case 7:
                    toKelvin;
                    temp = toNewton(temp);
                    break;
                case 8:
                    toKelvin;
                    temp = toDelisle(temp);
                    break;
            }
            if(toSelection != 4){
                print(temp, unit);
            }
        }
        break;
        case 5:{
            const toKelvin = temp = (temp - 7.5) / 0.52500 + 273.15;
            switch(toSelection){
                case 1:
                    toKelvin;
                    temp = toCelsius(temp); 
                    break;
                case 2:
                    toKelvin;
                    temp = toFahrenheit(temp); 
                    break;
                case 3:
                    toKelvin;
                    break;
                case 4:
                    toKelvin;
                    temp = toRankine(temp); 
                    break;
                case 5:
                    doofus(temp);
                    break;
                case 6:
                    toKelvin;
                    temp = toReaumur(temp); 
                    break;
                case 7:
                    toKelvin;
                    temp = toNewton(temp); 
                    break;
                case 8:
                    toKelvin;
                    temp = toDelisle(temp); 
                    break;
            }
            if(toSelection != 5){
                print(temp, unit);
            }
        }
        break;
        case 6:{
            const toKelvin = temp = temp * 4/5 + 273.15;
            switch(toSelection){
                case 1:
                    toKelvin;
                    temp = toCelsius(temp); 
                    break;
                case 2:
                    toKelvin;
                    temp = toFahrenheit(temp); 
                    break;
                case 3:
                    toKelvin;
                    break;
                case 4:
                    toKelvin;
                    temp = toRankine(temp); 
                    break;
                case 5:
                    toKelvin;
                    temp = toRomer(temp);
                    break;
                case 6:
                    doofus(temp);
                    break;
                case 7:
                    toKelvin;
                    temp = toNewton(temp); 
                    break;
                case 8:
                    toKelvin;
                    temp = toDelisle(temp); 
                    break;
            }
            if(toSelection != 6){
                print(temp, unit);
            }
        }
        break;
        case 7:{
            const toKelvin = temp = temp * 100/33 + 273.15;
            switch(toSelection){
                case 1:
                    toKelvin;
                    temp = toCelsius(temp); 
                    break;
                case 2:
                    toKelvin;
                    temp = toFahrenheit(temp); 
                    break;
                case 3:
                    toKelvin;
                    break;
                case 4:
                    toKelvin;
                    temp = toRankine(temp); 
                    break;
                case 5:
                    toKelvin;
                    temp = toRomer(temp);
                    break;
                case 6:
                    toKelvin;
                    temp = toReaumur(temp); 
                    break;
                case 7:
                    doofus(temp);
                    break;
                case 8:
                    toKelvin;
                    temp = toDelisle(temp); 
                    break;
            }
            if(toSelection != 7){
                print(temp, unit);
            }
        }
        break;
        case 8:{
            const toKelvin = temp = 373.15 - (temp * 2/3);
            switch(toSelection){
                case 1:
                    toKelvin;
                    temp = toCelsius(temp); 
                    break;
                case 2:
                    toKelvin;
                    temp = toFahrenheit(temp); 
                    break;
                case 3:
                    toKelvin;
                    break;
                case 4:
                    toKelvin;
                    temp = toRankine(temp); 
                    break;
                case 5:
                    toKelvin;
                    temp = toRomer(temp);
                    break;
                case 6:
                    toKelvin;
                    temp = toReaumur(temp); 
                    break;
                case 7:
                    toKelvin;
                    temp = toNewton(temp); 
                    break;
                case 8:
                    doofus(temp);
                    break;
            }
            if(toSelection != 8){
                print(temp, unit);
            }
            break;
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

function getFromSelection(fromSelection){
    if(document.getElementById("fromCelsius").checked){
        fromSelection = 1;
    }
    else if(document.getElementById("fromFahrenheit").checked){
        fromSelection = 2;
    }
    else if(document.getElementById("fromKelvin").checked){
        fromSelection = 3;
    }
    else if(document.getElementById("fromRankine").checked){
        fromSelection = 4;
    }
    else if(document.getElementById("fromRomer").checked){
        fromSelection = 5;
    }
    else if(document.getElementById("fromReaumur").checked){
        fromSelection = 6;
    }
    else if(document.getElementById("fromNewton").checked){
        fromSelection = 7;
    }
    else{
        fromSelection = 8;
    }
    return Number(fromSelection)
}

function getToSelection(toSelection){
    if(document.getElementById("toCelsius").checked){
        unit = "C";
        toSelection = 1;
    }
    else if(document.getElementById("toFahrenheit").checked){
        unit = "F";
        toSelection = 2;
    }
    else if(document.getElementById("toKelvin").checked){
        unit = "K";
        toSelection = 3;
    }
    else if(document.getElementById("toRankine").checked){
        unit = "R";
        toSelection = 4;
    }
    else if(document.getElementById("toRomer").checked){
        unit = "Rø";
        toSelection = 5;
    }
    else if(document.getElementById("toReaumur").checked){
        unit = "Ré";
        toSelection = 6;
    }
    else if(document.getElementById("toNewton").checked){
        unit = "N";
        toSelection = 7;
    }
    else{
        unit = "D";
        toSelection = 8;
    }
    return Number(toSelection);
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