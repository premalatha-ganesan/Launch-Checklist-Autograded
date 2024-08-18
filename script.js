// Write your JavaScript code here!

  
  window.addEventListener("load", function() {
        let listedPlanets;
        let listedPlanetsResponse = myFetch();

        listedPlanetsResponse.then(function(result) {
            listedPlanets = result;
        }).then(function () {
            let selectedPlanet = pickPlanet(listedPlanets);
            addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter,selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image );
        });

        let form = document.getElementById("launchForm");
        let inputPilotName = document.getElementById("launchForm").querySelector("#pilotName");
        let inputCoPilotName = document.getElementById("launchForm").querySelector("input[name=copilotName]");
        let inputFuelLevel = document.getElementById("launchForm").querySelector("input[name=fuelLevel]");
        let inputCargoMass = document.getElementById("launchForm").querySelector("input[name=cargoMass]");
        let list = document.getElementById("launchStatusCheck").querySelector("#faultyItems");
        
        form.addEventListener("submit", function(event) {
            if(inputPilotName.value === "" 
                    || inputCoPilotName.value === "" 
                    || inputFuelLevel.value === "" 
                    || inputCargoMass.value === "") {
                alert("All fields required");
            }
            else {
                formSubmission(document,list, inputPilotName.value, inputCoPilotName.value, inputFuelLevel.value, inputCargoMass.value);
            }
            event.preventDefault();
    });
})
