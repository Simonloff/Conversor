// Conversiones de Peso
function convertPeso() {
    let value = parseFloat(document.getElementById("pesoValue").value);
    let fromUnit = document.getElementById("fromPeso").value;
    let toUnit = document.getElementById("toPeso").value;

    let conversionRates = {
        kilogram: { gram: 1000, shortTon: 0.00110231, longTon: 0.000984207, pound: 2.20462, ounce: 35.274, dram: 564.383, grain: 15432.4, stone: 0.157473 },
        // Añadir más conversiones aquí...
    };

    let result;
    if (fromUnit === toUnit) {
        result = value;
    } else if (conversionRates[fromUnit] && conversionRates[fromUnit][toUnit]) {
        result = value * conversionRates[fromUnit][toUnit];
    } else {
        result = "Conversión no válida.";
    }

    document.getElementById("pesoResult").innerText = result + " " + toUnit;
}

// Conversiones de Líquido
function convertLiquido() {
    let value = parseFloat(document.getElementById("liquidoValue").value);
    let fromUnit = document.getElementById("fromLiquido
