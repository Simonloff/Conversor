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
                                               let fromUnit = document.getElementById("fromLiquido").value;
                                               let toUnit = document.getElementById("toLiquido").value;

                                               let conversionRates = {
                                                   litro: { milliliter: 1000, gallon: 0.264172, quart: 1.05669, pint: 2.11338, gill: 8.45351, fluidOunce: 33.814, fluidDram: 270.512, minim: 16230.7 },
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

                                               document.getElementById("liquidoResult").innerText = result + " " + toUnit;
                                           }

                                           // Conversiones de Distancia
                                           function convertDistancia() {
                                               let value = parseFloat(document.getElementById("distanciaValue").value);
                                               let fromUnit = document.getElementById("fromDistancia").value;
                                               let toUnit = document.getElementById("toDistancia").value;

                                               let conversionRates = {
                                                   meter: { kilometer: 0.001, nauticalMile: 0.000539957, mile: 0.000621371, furLong: 0.00497096, rod: 0.198839, fathom: 0.546807, yard: 1.09361, foot: 3.28084, inch: 39.3701 },
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

                                               document.getElementById("distanciaResult").innerText = result + " " + toUnit;
                                           }
