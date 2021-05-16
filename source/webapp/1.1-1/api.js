var temp_one = "Celsius";
var temp_two = "Kelvin";
var output_temp = 0.0;
var convertion_informer;
var output_temp_informer;

function initialization() {
    convertion_informer = document.createElement("h3");
    convertion_informer.innerText = "Converting from " + temp_one + " to " + temp_two;
    document.body.appendChild(convertion_informer);
}

function initialization_two() {
    output_temp_informer = document.createElement("h4");
    output_temp_informer.innerText = "";
    document.body.appendChild(output_temp_informer);
}

function changeUnitOne() {
    switch (temp_one) {
        case "Celsius":
            temp_one = "Fahrenheit";
        break;
        case "Fahrenheit":
            temp_one = "Kelvin";
        break;
        case "Kelvin":
            temp_one = "Celsius";
        break;
    }
    convertion_informer.innerText = "";
    convertion_informer.innerText = "Converting from " + temp_one + " to " + temp_two;
}

function changeUnitTwo() {
    switch (temp_two) {
        case "Celsius":
            temp_two = "Fahrenheit";
        break;
        case "Fahrenheit":
            temp_two = "Kelvin";
        break;
        case "Kelvin":
            temp_two = "Celsius";
        break;
    }
    convertion_informer.innerText = "";
    convertion_informer.innerText = "Converting from " + temp_one + " to " + temp_two;
}

function convert() {
    if (temp_one == temp_two) {
        output_temp_informer.innerText = "You cannot convert from " + temp_one + " to " + temp_two;
    }
    else if (input_temperature.value == "" || input_temperature.value == null) {
        output_temp_informer.innerText = "Please enter a number!";
    }
    else {
        if (temp_one == "Celsius") {
            switch (temp_two) {
                case "Fahrenheit":
                    output_temp = (input_temperature.value * 9/5) + 32;
                break;
                default:
                    output_temp = parseInt(input_temperature.value) + 273.15;
                break;
            }
        }
        if (temp_one == "Fahrenheit") {
            switch (temp_two) {
                case "Celsius":
                    output_temp = (input_temperature.value - 32) * 5/9;
                break;
                default:
                    output_temp = (input_temperature.value - 32) * 5/9 + 273.15;
                break;
            }
        }
        if (temp_one == "Kelvin") {
            switch (temp_two) {
                case "Celsius":
                    output_temp = parseInt(input_temperature.value) - 273.15;
                break;
                default:
                    output_temp = (input_temperature.value - 273.15) * 9/5 + 32;
                break;
            }
        }
        var output_temp_rounded = Math.round(output_temp);
        output_temp_informer.innerText = "Temperature in " + temp_two + ": " + output_temp_rounded;
    }
}