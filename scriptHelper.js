// Write your helper functions here!
require('isomorphic-fetch');




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
   if (testInput === "") {
       return "Empty";
   } else if(isNaN(testInput)) {
       return "Not a number";
   } else {
       return "Is a number";
   }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotName = document.querySelector(pilot);
    let copilotName = document.querySelector(copilot);
    let fuel = document.querySelector(fuelLevel);
    let cargoMass = document.querySelector(cargoLevel);
    
   


    if (validateInput(pilotName.value) === "Empty" || validateInput(copilotName.value) === "Empty" || validateInput(fuel.value) === "Empty" || validateInput(cargoMass.value) === "Empty") {
        alert("All fields are required.");
    }

   if (validateInput(pilotName.value) === "Is a number" || validateInput(copilotName.value) === "Is a number") {
       alert("Names cannot be numbers.");
   }

   if (validateInput(cargoMass.value) === "Not a number") {
       alert("You must enter a number for cargo mass.");
   }

   if (validateInput(fuel.value) === "Not a number") {
       alert("You must enter a number for fuel level.");
   }


   console.log(document.querySelector("#pilotStatus"));

    let pilotStatus = document.querySelector("#pilotStatus");
    pilotStatus.innerHTML = "Pilot " + pilotName.value + " Ready";

    let copilotStatus = document.querySelector("#copilotStatus");
    copilotStatus.innerHTML = "Copilot " + copilotName.value + " Ready";

    let faultyItems = document.querySelector("#faultyItems");

    let fuelStatus = document.querySelector("#fuelStatus");

    let launchStatus = document.querySelector("#launchStatus");

    if (fuel.value < 10000) {
        faultyItems.style.visibility = "visible";
        fuelStatus.innerHTML = "There is not enough fuel for this journey.";
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle not ready for launch";
    }
    

    let cargoStatus = document.querySelector("#cargoStatus");

    if (cargoMass.value > 10000) {
        faultyItems.style.visibility = "visible";
        cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle not ready for launch"
    }

    else {
        launchStatus.innerHTML = "Shuttle is ready for launch.";
        launchStatus.style.color = "green";
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
