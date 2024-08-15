// Write your JavaScript code here!
//const { validateInput1   } = require("./scriptHelper");

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    console.log("page loaded successfully");
    let form = document.querySelector("form");
        
    
  });


    window.addEventListener("load", function(){

        console.log("Page Loaded");
        let form = document.getElementById("launchForm");
        let inputPilotName = document.getElementById("launchForm").querySelector("#pilotName");
        let inputCoPilotName = document.getElementById("launchForm").querySelector("input[name=copilotName]");
        let inputFuelLevel = document.getElementById("launchForm").querySelector("input[name=fuelLevel]");
        let inputCargoMass = document.getElementById("launchForm").querySelector("input[name=cargoMass]");
        let list = document.getElementById("launchStatusCheck").querySelector("#faultyItems");
        
        form.addEventListener("submit", function(event){
            console.log("submit success");
            console.log(inputPilotName.value);
            console.log(inputCoPilotName.value);
            console.log(inputFuelLevel.value);
            console.log(inputCargoMass.value);   
            alert("submit clicked");
            if(inputPilotName.value === "" || inputCoPilotName.value === "" || inputFuelLevel.value === "" || 
            inputCargoMass.value === ""){
                alert("All fields required");
              //  event.preventDefault();
            }
            else{
                formSubmission(document,list, inputPilotName.value, inputCoPilotName.value, inputFuelLevel.value, inputCargoMass.value);
            }
    });
})
