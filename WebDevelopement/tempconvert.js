const tempInput = document.getElementById("tempInput");
const unitSelect = document.getElementById("unitSelect");
const result = document.getElementById("result");

function convert() {
    const value = parseFloat(tempInput.value);
    const conversion = unitSelect.value;

    if(isNaN(value)) {
        result.textContent = "Enter a Valid Number :-";
        return;
    }

    let output;

    if(conversion == "c-to-k") {
        output = (value + 273.15).toFixed(2) + "K";
    }
    else {
        output = (value - 273.15).toFixed(2) + "C";
    }

    result.textContent = "Converted :" + output;
}

tempInput.addEventListener("input", convert);
unitSelect.addEventListener("change", convert);