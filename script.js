// Write your JavaScript code here!

// const { addDestinationInfo } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    console.log("window loaded");
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        formSubmission(document, "", "input[name=pilotName]", "input[name=copilotName]", "input[name=fuelLevel]", "input[name=cargoMass]");
        console.log("event");

   })
   
   
   
    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log("result planets", listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let pickedPlanet = pickPlanet(listedPlanets);
       console.log(pickedPlanet);
       addDestinationInfo(pickedPlanet);
    })
   
});