document.getElementById("submitButton").onclick = function () {

    let temp = getTemp();

    let fromSelection = getFromSelection();
    let toSelection = getToSelection();

    var converter = {
        fromCelsius: temp => temp + 273.15,
        toCelsius: temp => temp - 273.15,

        fromFahrenheit: temp => (temp - 32) * 5 / 9 + 273.15,
        toFahrenheit: temp => (temp - 273.15) * 9 / 5 + 32,

        fromRankine: temp => temp * 5 / 9,
        toRankine: temp => temp * 1.8,

        fromRomer: temp => (temp - 7.5) / 0.52500 + 273.15,
        toRomer: temp => (temp - 273.15) * 21 / 40 + 7.5,

        fromReaumur: temp => temp * 4 / 5 + 273.15,
        toReaumur: temp => (temp - 273.15) * 0.8,

        fromNewton: temp => temp * 100 / 33 + 273.15,
        toNewton: temp => (temp - 273.15) * 0.33000,

        fromDelisle: temp => 373.15 - (temp * 2 / 3),
        toDelisle: temp => (temp - 273.15) * 1.5000 - 100.00
    }

    Object.freeze(converter);

    switch (fromSelection) {
        case 1: {
            temp = converter.fromCelsius(temp);
            switch (toSelection) {
                case 1:
                    doofus(temp);
                    break;
                case 2:
                    temp = converter.toFahrenheit(temp);
                    break;
                case 4:
                    temp = converter.toRankine(temp);
                    break;
                case 5:
                    temp = converter.toRomer(temp);
                case 6:
                    temp = converter.toReaumur(temp);
                    break;
                case 7:
                    temp = converter.toNewton(temp);
                    break;
                case 8:
                    temp = converter.toDelisle(temp);
                    break;
            }
            if (toSelection != 1) print(temp, unit);
        }
            break;
        case 2: {
            temp = converter.fromFahrenheit(temp);
            switch (toSelection) {
                case 1:
                    temp = converter.toCelsius(temp);
                    break;
                case 2:
                    doofus(temp);
                    break;
                case 4:
                    temp = converter.toRankine(temp);
                    break;
                case 5:
                    temp = converter.toRomer(temp);
                    break;
                case 6:
                    temp = converter.toReaumur(temp);
                    break;
                case 7:
                    temp = converter.toNewton(temp);
                    break;
                case 8:
                    temp = converter.toDelisle(temp);
                    break;
            }
            if (toSelection != 2) print(temp, unit);
        }
            break;
        case 3: {
            switch (toSelection) {
                case 1:
                    temp = converter.toCelsius(temp);
                    break;
                case 2:
                    temp = converter.toFahrenheit(temp);
                    break;
                case 3:
                    doofus(temp);
                    break;
                case 4:
                    temp = converter.toRankine(temp);
                    break;
                case 5:
                    temp = converter.toRomer(temp);
                    break;
                case 6:
                    temp = converter.toReaumur(temp);
                    break;
                case 7:
                    temp = converter.toNewton(temp);
                    break;
                case 8:
                    temp = converter.toDelisle(temp);
                    break;
            }
            if (toSelection != 3) print(temp, unit);
        }
            break;
        case 4: {
            temp = converter.fromRankine(temp);
            switch (toSelection) {
                case 1:
                    temp = converter.toCelsius(temp);
                    break;
                case 2:
                    temp = converter.toFahrenheit(temp);
                    break;
                case 4:
                    doofus(temp);
                    break;
                case 5:
                    temp = converter.toRomer(temp);
                case 6:
                    temp = converter.toReaumur(temp);
                    break;
                case 7:
                    temp = converter.toNewton(temp);
                    break;
                case 8:
                    temp = converter.toDelisle(temp);
                    break;
            }
            if (toSelection != 4) print(temp, unit);
        }
            break;
        case 5: {
            temp = converter.fromRomer(temp);
            switch (toSelection) {
                case 1:
                    temp = converter.toCelsius(temp);
                    break;
                case 2:
                    temp = converter.toFahrenheit(temp);
                    break;
                case 4:
                    temp = converter.toRankine(temp);
                    break;
                case 5:
                    doofus(temp);
                    break;
                case 6:
                    temp = converter.toReaumur(temp);
                    break;
                case 7:
                    temp = converter.toNewton(temp);
                    break;
                case 8:
                    temp = converter.toDelisle(temp);
                    break;
            }
            if (toSelection != 5) print(temp, unit);
        }
            break;
        case 6: {
            temp = converter.fromReaumur(temp);
            switch (toSelection) {
                case 1:
                    temp = converter.toCelsius(temp);
                    break;
                case 2:
                    temp = converter.toFahrenheit(temp);
                    break;
                case 4:
                    temp = converter.toRankine(temp);
                    break;
                case 5:
                    temp = converter.toRomer(temp);
                    break;
                case 6:
                    doofus(temp);
                    break;
                case 7:
                    temp = converter.toNewton(temp);
                    break;
                case 8:
                    temp = converter.toDelisle(temp);
                    break;
            }
            if (toSelection != 6) print(temp, unit);
        }
            break;
        case 7: {
            temp = converter.fromNewton(temp);
            switch (toSelection) {
                case 1:
                    temp = converter.toCelsius(temp);
                    break;
                case 2:
                    temp = converter.toFahrenheit(temp);
                    break;
                case 4:
                    temp = converter.toRankine(temp);
                    break;
                case 5:
                    temp = converter.toRomer(temp);
                    break;
                case 6:
                    temp = converter.toReaumur(temp);
                    break;
                case 7:
                    doofus(temp);
                    break;
                case 8:
                    temp = converter.toDelisle(temp);
                    break;
            }
            if (toSelection != 7) print(temp, unit);
        }
            break;
        case 8: {
            temp = converter.fromDelisle(temp);
            switch (toSelection) {
                case 1:
                    temp = converter.toCelsius(temp);
                    break;
                case 2:
                    temp = converter.toFahrenheit(temp);
                    break;
                case 4:
                    temp = converter.toRankine(temp);
                    break;
                case 5:
                    temp = converter.toRomer(temp);
                    break;
                case 6:
                    temp = converter.toReaumur(temp);
                    break;
                case 7:
                    temp = converter.toNewton(temp);
                    break;
                case 8:
                    doofus(temp);
                    break;
            }
            if (toSelection != 8) print(temp, unit);
            break;
        }
    }
}

function doofus(temp) {
    document.getElementById("result").innerHTML = `you doofus, i refuse to do that.... okay here it is anyways: ${temp}°${unit}`;
}

function print(temp, unit, selection) {
    switch (selection) {
        case 0:
            document.getElementById("result").innerHTML = "You need to choose "
            break;
        default:
            document.getElementById("result").innerHTML = `${temp}°${unit}`;
            break;
    }
}

function getTemp(temp) {
    temp = document.getElementById("textBox").value;
    return Number(temp);
}

function getFromSelection(fromSelection) {
    if (document.getElementById("fromCelsius").checked) fromSelection = 1;

    else if (document.getElementById("fromFahrenheit").checked) fromSelection = 2;

    else if (document.getElementById("fromKelvin").checked) fromSelection = 3;

    else if (document.getElementById("fromRankine").checked) fromSelection = 4;

    else if (document.getElementById("fromRomer").checked) fromSelection = 5;

    else if (document.getElementById("fromReaumur").checked) fromSelection = 6;

    else if (document.getElementById("fromNewton").checked) fromSelection = 7;

    else fromSelection = 8;

    return Number(fromSelection)
}

function getToSelection(toSelection) {
    if (document.getElementById("toCelsius").checked) {
        unit = "C";
        toSelection = 1;
    }
    else if (document.getElementById("toFahrenheit").checked) {
        unit = "F";
        toSelection = 2;
    }
    else if (document.getElementById("toKelvin").checked) {
        unit = "K";
        toSelection = 3;
    }
    else if (document.getElementById("toRankine").checked) {
        unit = "R";
        toSelection = 4;
    }
    else if (document.getElementById("toRomer").checked) {
        unit = "Rø";
        toSelection = 5;
    }
    else if (document.getElementById("toReaumur").checked) {
        unit = "Ré";
        toSelection = 6;
    }
    else if (document.getElementById("toNewton").checked) {
        unit = "N";
        toSelection = 7;
    }
    else {
        unit = "D";
        toSelection = 8;
    }
    return Number(toSelection);
}