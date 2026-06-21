/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertButton = document.getElementById('convertButton');
const inputNumber = document.getElementById('inputNumber');

const lengthOutput = document.getElementById('lengthOutput');
const volumeOutput = document.getElementById('volumeOutput');
const massOutput = document.getElementById('massOutput');

convertButton.addEventListener('click', (e) => {
    const inputValue = Number(inputNumber.value)

    const metersToFeet = (inputValue * 3.281).toFixed(3);
    const feetToMeters = (inputValue / 3.281).toFixed(3);

    const litersToGallon = (inputValue * 0.264).toFixed(3);
    const gallonToLiters = (inputValue / 0.264).toFixed(3);

    const kilosToPounds = (inputValue * 2.204).toFixed(3);
    const poundsToKilos = (inputValue * 2.204).toFixed(3);

    lengthOutput.innerText = `${inputValue} meters = ${metersToFeet} feet | ${inputValue} feet = ${feetToMeters} meters`;
    volumeOutput.innerText = `${inputValue} liters = ${litersToGallon} gallons | ${inputValue} gallons = ${gallonToLiters} liters`;
    massOutput.innerText = `${inputValue} kilos = ${kilosToPounds} pounds | ${inputValue} pounds = ${poundsToKilos} kilos`;
})