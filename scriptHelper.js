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
    console.log(document.getElementById("missionTarget").innerHTML);

    document.getElementById("missionTarget").innerHTML = missionDestination;
 }
 
 function validateInput(testInput) {
    if(testInput === ""){
        return "Empty";
    }
    else if(isNaN(testInput)){
        return "Not a Number";
    }
    else {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    console.log("inside form submission");
    let pilotResult = validateInput(pilot);
    let coPilotResult = validateInput(copilot);
    let fuelLevelResult = validateInput(fuelLevel);
    let cargoLevelResult = validateInput(cargoLevel);
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let h2 = document.getElementById("launchStatus");
    

    console.log(pilotResult);
    console.log(coPilotResult);
    console.log(fuelLevelResult);
    console.log(cargoLevelResult);

    /*let pilotValid = pilotResult === "Not a Number";
    if (pilotValid) {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    }
    let coPilotValid = coPilotResult === "Not a Number";
    if (coPilotValid) {
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }
    let fuelValid = fuelLevelResult === "Is a Number" && fuelLevel >= 10000;
    if (!fuelValid) {
        fuelStatus.innerHTML = "Fuel level too low for launch"; 
        list.style.visibility = "visible";
        h2.style.color = "red"; 
        h2.innerHTML = "Shuttle Not Ready for Launch"; 
        console.log(h2.style.color);
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch"; 
        list.style.visibility = "visible"; 
        h2.innerHTML = "Shuttle Ready for Launch"; 
        h2.style.color = "green";
    }

    let cargoValid = cargoLevelResult  === "Is a Number" && cargoLevel < 10000;
    if (!cargoValid) {
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"; 
        list.style.visibility = "visible"; 
        h2.innerHTML = "Shuttle Not Ready for Launch"; 
        h2.style.color = "red";
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch"; 
        list.style.visibility = "visible"; 
        h2.innerHTML = "Shuttle Ready for Launch"; 
        h2.style.color = "green";
    }

    if (pilotValid && coPilotValid && fuelValid && cargoValid) {
        list.style.visibility = "visible";
        h2.innerHTML = "Shuttle is Ready for Launch";
        h2.style.color = "green";
    }*/


    if (pilotResult === "Not a Number" && coPilotResult === "Not a Number" && 
    fuelLevelResult === "Is a Number" && cargoLevelResult === "Is a Number") {
        console.log("All values validated");
        
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        console.log("fuelLevel :" + fuelLevel);
        console.log(fuelStatus.innerHTML);
        if(fuelLevel < 10000){
            console.log("inside fuel less than 10000");
            list.style.visibility = "visible"; 
            fuelStatus.innerHTML = "Fuel level too low for launch"; 
            list.style.visibility = "visible"; 
            h2.innerHTML = "Shuttle Not Ready for Launch"; 
            h2.style.color = "red"; 
            console.log(h2.innerHTML);
            console.log(h2.style.color);
        } 
        

        if(cargoLevel > 10000 && fuelLevel >= 10000){
            console.log("inside cargolevel > 10000 ")
            cargoStatus.innerHTML = "Cargo mass too heavy for launch"; 
            fuelLevel.innerHTML = "Fuel level high enough for launch";
            list.style.visibility = "visible"; 
            h2.innerHTML = "Shuttle Not Ready for Launch"; 
            h2.style.color = "red";
        } 
        

        if(fuelLevel >= 10000 && cargoLevel <= 10000){
            console.log("inside success condition");
            list.style.visibility = "visible";
            h2.innerHTML = "Shuttle is Ready for Launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            h2.style.color = "green";

        }
        //  else {
        //     console.log("inside both fuel and cargo failure condition");
        //     cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        //     fuelStatus.innerHTML = "Fuel level too low for launch";
        //     h2.innerHTML = "Shuttle Not Ready for Launch";
        //     h2.style.color = "red";

        // }
       
    }
    
    else {
        alert("Please enter valid values (String for names and number for Fuel level and Cargo mass!)");
    }
    console.log(fuelStatus.innerHTML);
}
    

 
 async function myFetch() {
    console.log("my fetch");
     let planetsReturned;
 
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        console.log(response);
        return response.json();
    });
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
   // console.log(planets.length);
    console.log("inside Pick Planet");
    const randomIndex = Math.floor(Math.random()* planets.length);
    console.log(randomIndex);
    const randomPlanet = planets[randomIndex];
    console.log(randomPlanet);
    return randomPlanet;

 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;