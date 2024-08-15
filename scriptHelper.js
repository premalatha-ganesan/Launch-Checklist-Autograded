// Write your helper functions here!

require('cross-fetch/polyfill');

/*window.addEventListener("load", function(){
    let form = document.getElementById("launchForm");
    console.log("done");
    form.addEventListener("submit", function(event){
        alert("Submit clicked");
        console.log("submit clicked");
    })
   form.addEventListener("submit",function(event){
        let inputPilotName = document.querySelector(input[name=pilotName]);
            let inputCoPilotName = document.querySelector(input[name=copilotName]);
            let inputFuelLevel = document.querySelector(input[name=fuelLevel]);
            let inputCargoMass = document.querySelector(input[name=cargoMass]);

    });
})*/

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if(testInput === ""){
        return "Empty";
    }
    else if(isNaN(testInput)){
        return "Not a number";
    }
    else {
        return "Is a number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotResult = validateInput(pilot);
    let coPilotResult = validateInput(copilot);
    let fuelLevelResult = validateInput(fuelLevel);
    let cargoLevelResult = validateInput(cargoLevel);
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    list.style.visibility = "visible";
    console.log("changed style");
    if (pilotResult === "Not a number" && coPilotResult === "Not a number" && 
    fuelLevelResult === "Is a number" && cargoLevelResult === "Is a number") {
        if(fuelLevelResult > 10000){
            fuelStatus.innerHTML = "Fuel level high enough for launch";      
        }
        if(cargoLevelResult >)
    
    }

 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;