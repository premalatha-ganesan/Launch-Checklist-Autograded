// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
    console.log("planet response");

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse = myFetch();
    // console.log(listedPlanetsResponse);
    // console.log("Listed Planets Response : " + listedPlanetsResponse);
    // listedPlanetsResponse.then(function (result) {
    //    listedPlanets = result;
    //   console.log(listedPlanets);
    //  }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    //     let selectedPlanet = pickPlanet(listedPlanets);
    //     console.log("Selected Planet :" + selectedPlanet);
    //  })
  });


    window.addEventListener("load", function(){

        console.log("Page Loaded");
       
        let listedPlanets;
        let listedPlanetsResponse = myFetch();
        console.log("Planets response " + listedPlanetsResponse);

        listedPlanetsResponse.then(function(result) {
            console.log("Result" + result);
            listedPlanets = result;
        }).then(function () {
            let selectedPlanet = pickPlanet(listedPlanets);
            console.log("Selected Planet :" + selectedPlanet.name);
            
            /*
            addDestinationInf
            */
            addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter,selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image );
            //document.getElementById("missionTarget").innerHTML = selectedPlanet.name;
        });

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
         
            if(inputPilotName.value === "" || inputCoPilotName.value === "" || inputFuelLevel.value === "" || 
            inputCargoMass.value === ""){
                alert("All fields required");
              //  event.preventDefault();
            }
            else{
                formSubmission(document,list, inputPilotName.value, inputCoPilotName.value, inputFuelLevel.value, inputCargoMass.value);
            }
            event.preventDefault();
    });
})
