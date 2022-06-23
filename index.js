document.getElementById("submitButton").onclick = function(){

    let temp;

    if(document.getElementById("fromCelsius").checked){
        if(document.getElementById("toCelsius").checked){
            temp = document.getElementById("textBox").value;
            temp = Number(temp);
            document.getElementById("tempLabel").innerHTML = "you doofus, i refuse to do that.... okay here it is anyways: " + temp + "°C";
        }
        else if(document.getElementById("toFahrenheit").checked){
            temp = document.getElementById("textBox").value;
            temp = Number(temp);
            temp = temp * 9/5 + 32;
            Math.round(temp);
            document.getElementById("tempLabel").innerHTML = temp + "°F";
        }
        else if(document.getElementById("toKelvin").checked){
            temp = document.getElementById("textBox").value;
            temp = Number(temp);
            temp = temp + 273.15;
            document.getElementById("tempLabel").innerHTML = temp + "°K";
        }
        else{
            document.getElementById("tempLabel").innerHTML = "you haven't chosen what you want to convert to!"
        }
    }
    else if(document.getElementById("fromFahrenheit").checked){
        if(document.getElementById("toCelsius").checked){
            temp = document.getElementById("textBox").value;
            temp = Number(temp);
            temp = (temp - 32) * (5/9);
            Math.round(temp);
            document.getElementById("tempLabel").innerHTML = temp + "°C";
        }
        else if(document.getElementById("toFahrenheit").checked){
            temp = document.getElementById("textBox").value;
            temp = Number(temp);
            document.getElementById("tempLabel").innerHTML = "you doofus, i refuse to do that.... okay here it is anyways: " + temp + "°F";
        }
        else if(document.getElementById("toKelvin").checked){
            temp = document.getElementById("textBox").value;
            temp = Number(temp);
            temp = (temp - 32) * 5/9 + 273.15;
            document.getElementById("tempLabel").innerHTML = temp + "°K";
        }
    }
    else if(document.getElementById("fromKelvin").checked){
        if(document.getElementById("toCelsius").checked){
            temp = document.getElementById("textBox").value;
            temp = Number(temp);
            temp = temp - 273.15;
            document.getElementById("tempLabel").innerHTML = temp + "°C"
        }
        else if(document.getElementById("toFahrenheit").checked){
            temp = document.getElementById("textBox").value;
            temp = Number(temp);
            temp = (temp - 273.15) * 9/5 + 32;
            document.getElementById("tempLabel").innerHTML = temp + "°C"
        }
        else if(document.getElementById("toKelvin").checked){
            temp = document.getElementById("textBox").value;
            temp = Number(temp);
            document.getElementById("tempLabel").innerHTML = "you doofus, i refuse to do that.... okay here it is anyways: " + temp + "°K";
        }
        else{
            document.getElementById("tempLabel").innerHTML = "you haven't chosen what you want to convert to!"
        }
    }
    else{
        document.getElementById("tempLabel").innerHTML = "You haven't selected a unit!";
    }
}