document.getElementById("submitButton").onclick = function(){

    let temp;

    if(document.getElementById("cButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°C";
    }
    else if(document.getElementById("fButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°F";
    }
    else{
        document.getElementById("tempLabel").innerHTML = "You haven't selected a unit!";

    }
}

function toCelsius(temp){
    temp = (temp - 32) * (5/9);
    return Math.round(temp);
}

function toFahrenheit(temp){
    temp = temp * 9/5 + 32;
    return Math.round(temp);
}