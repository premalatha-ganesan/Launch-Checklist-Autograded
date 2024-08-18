// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionDestination = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`;
    document.getElementById("missionTarget").innerHTML = missionDestination;
 }
 
 function validateInput(testInput) {
    if (testInput === "")
    {
        return "Empty";
    } 
    else if (isNaN(testInput))
    {
        return "Not a Number";
    }
    else
    {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    const minFuelLevel = 10000;
    const maxCargoMass = 10000;

    let launchStatusHeading = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    let pilotResult = validateInput(pilot);
    let coPilotResult = validateInput(copilot);
    let fuelLevelResult = validateInput(fuelLevel);
    let cargoMassResult = validateInput(cargoLevel);

    let pilotValid = pilotResult === "Not a Number";
    let coPilotValid = coPilotResult === "Not a Number";
    let isFuelNumeric = fuelLevelResult === "Is a Number";
    let isCargoMassNumeric = cargoMassResult  === "Is a Number";

    let allFieldsValid = pilotValid && coPilotValid && isFuelNumeric && isCargoMassNumeric;

    if (!allFieldsValid) {
        alert("Make sure to enter valid information for each field!");
        return;
    }

    list.style.visibility = "visible";
    let shuttleStatus = "green";
    let shuttleStatusMsg = "Shuttle is Ready for Launch";

    let fuelStatusMessage = "Fuel level high enough for launch";
    if (fuelLevel < minFuelLevel) {
        fuelStatusMessage = "Fuel level too low for launch"; 
        shuttleStatus = "red";
        shuttleStatusMsg = "Shuttle Not Ready for Launch";
    }

    let cargoStatusMessage = "Cargo mass low enough for launch";
    if (cargoLevel > maxCargoMass) {
        cargoStatusMessage = "Cargo mass too heavy for launch"; 
        shuttleStatus = "red";
        shuttleStatusMsg = "Shuttle Not Ready for Launch";
    }

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = fuelStatusMessage;
    cargoStatus.innerHTML = cargoStatusMessage;
    launchStatusHeading.innerHTML = shuttleStatusMsg;
    launchStatusHeading.style.color = shuttleStatus;
}
    
 async function myFetch() {

    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random()* planets.length);
    const randomPlanet = planets[randomIndex];
    return randomPlanet;

 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;